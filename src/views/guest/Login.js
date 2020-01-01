import React, { useState } from 'react';
import { LOGIN } from '../../constants/api';
import { useDispatch } from 'react-redux';
import { login, loading } from '../../redux/actions';
import Cookies from 'js-cookie';
import LoginForm from '../../components/form/LoginForm';


export default function Login(props) {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const loginHandler = (data) => {
        console.log('signIn...H')
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        dispatch(loading());
        fetch(props.loginApi || LOGIN, options)
            .then(res => {
                res.clone().json()
                    .then(data => {
                        console.log(data);
                        if (res.status === 200) {
                            const userData = {
                                erp_token: res.headers.get('erp-auth-token'),
                                access_level: data.access_level,
                            };
                            Cookies.set('user', JSON.stringify(userData), { path: '/' });
                            // window.sessionStorage.setItem('user', JSON.stringify(userData));
                            dispatch(login(userData));
                        } else {
                            setError(data.error);
                        }
                    });

            })
            .catch(err => console.log(err))
            .finally(() => dispatch(loading(false))
            );
    };

    return (
        <LoginForm loginHandler={loginHandler} error={error} {...props} />
    );
}