import { loading } from "../redux/actions";

export const makeOptions = (token, method = 'GET', data = null) => (
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
    dispatch(loading());
    fetch(url, options)
        .then(res => {
            if (res.status === 200) onSuccess(res)
            else onFail()
        })
        .catch(err => onError(err))
        .finally(() => dispatch(loading(false)));

}