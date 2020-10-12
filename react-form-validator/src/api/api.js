import axios from "axios";
import {UPDATE_TOKENS} from "../redux/user-reducer";


export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email, password,
            returnSecureToken: true
        }

        let url = 'http://142.93.134.108:1111/sign_up';
        if (isLogin) {
            url = `http://142.93.134.108:1111/login?email=${email}&password=${password}`;
        }

        const response = await axios.post(url, authData);
        const data = response.data;
        localStorage.setItem('token', data.body.access_token);
        dispatch(authSuccess(data.body.access_token, data.body.refresh_token));
    }
}

export function authSuccess(access_token, refresh_token) {
    return {
        type: UPDATE_TOKENS,
        access_token,
        refresh_token
    }
}

export function isAuthenticated(state) {
    return !!state.auth.access_token;
}