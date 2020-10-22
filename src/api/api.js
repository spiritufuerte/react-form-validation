import axios from "axios";
import {UPDATE_TOKENS} from "../redux/user-reducer";
import {AUTH_ERROR} from "../redux/auth-reducer";
import store from '../redux/redux-store'


const instance = axios.create(
    {
        baseURL: 'http://142.93.134.108:1111'
    }
);

const responseInterceptor = (response) => {
    const data = response.data;
    if (data.status === 'error') {
        store.dispatch(authError(data.message));
        return
    }
    if (data.body?.status === 'error') {
        store.dispatch(authError(data.body.message));
        return
    }
    if (data.statusCode === 200) {
        localStorage.setItem('access_token', data.body.access_token);
        localStorage.setItem('refresh_token', data.body.refresh_token);
        store.dispatch(authSuccess(data.body.access_token, data.body.refresh_token));
    }

    return response;
}

instance.interceptors.response.use(responseInterceptor, error => error);


export function auth(email, password, isLogin) {
    return async () => {
        const authData = {
            email, password,
            returnSecureToken: true
        }

        let url = '/sign_up';
        if (isLogin) {
            url = `/login?email=${email}&password=${password}`;
        }

        await instance.post(url, authData);
    }
}

export function authError(authError) {
    return {
        type: AUTH_ERROR,
        authError
    }
}

export function authSuccess(access_token, refresh_token) {
    return {
        type: UPDATE_TOKENS,
        access_token,
        refresh_token
    }
}
