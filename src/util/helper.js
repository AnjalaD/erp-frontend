import { loading } from "../redux/actions";

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