import { loading, new_message, logout } from "../redux/actions";
import { TIMEZONE } from "../constants/constants";

export const makeOptions = (token, method = 'GET', data = {}) => (
    method === 'GET' ?
        {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'erp-auth-token': token
            },
        }
        :
        {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'erp-auth-token': token
            },
            body: JSON.stringify(data)
        }
)

export const fetchData = (
    url,
    options = {},
    dispatch,
    onSuccess = () => { },
    onFail = () => { },
    onError = () => { }
) => {
    console.log('fetching..')

    if (dispatch) dispatch(loading());

    fetch(url, options)
        .then(res => {
            if (res.status === 200) {
                res.clone().json()
                    .then(res => console.log(url, res));
                onSuccess(res);
                if (options.method !== 'GET') {
                    dispatch(new_message({
                        type: 'success',
                        message: 'Success!'
                    }));
                }
                console.log('##success...');
            }
            else {
                onFail();
                if (res.status === 400) {
                    res.json().then(res => dispatch(new_message({
                        type: 'error',
                        message: res.error
                    })))
                } else if (res.status === 401) {
                    dispatch(new_message({
                        type: 'error',
                        message: 'Session Expired! please signin again.'
                    }));
                    dispatch(logout());
                } else if (res.status === 500) {
                    res.json().then(res => dispatch(new_message({
                        type: 'error',
                        message: res.error
                    })))
                }
                console.log('##fail...')

            }
        })
        .catch(err => {
            onError(err);
            dispatch(new_message({
                type: 'error',
                message: 'Network Error!'
            }))
            console.log('##error...');

        })
        .finally(() => {
            if (dispatch) dispatch(loading(false))
        });

}

export const getLocalDate = function (inputDate) {
    var new_date = new Date(inputDate).toLocaleDateString('en-US', {
        timeZone: TIMEZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    return "".concat(new_date.slice(6, 10), "-", new_date.slice(0, 2), "-", new_date.slice(3, 5));
}

export const formatOrgDetails = (data) => {
    const temp = data.filter(item =>
        item.key === 'Name' ||
        item.key === 'Reg No.' ||
        item.key === 'Address Line 1' ||
        item.key === 'Address Line 2' ||
        item.key === 'Address Line 3' ||
        item.key === 'Contact No.'
    );
    const details = {};
    temp.forEach(item => {
        details[item.key] = item.value;
    });
    return details;
}