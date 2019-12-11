import { loading } from "../redux/actions";

export const makeOptions = (token, data = {}, method = 'POST') => ({
    method: method,
    headers: {
        'Content-Type': 'application/json',
        'erp-auth-toke': token
    },
    body: JSON.stringify(data)
})

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
        .finally(dispatch(loading(false)));

}