import { loading } from "../redux/actions";
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
                console.log('success');
            }
            else onFail();
        })
        .catch(err => onError(err))
        .finally(() => {
            console.log('finaly');
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