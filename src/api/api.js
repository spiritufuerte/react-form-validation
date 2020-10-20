import axios from "axios";
import {UPDATE_TOKENS} from "../redux/user-reducer";
import {AUTH_ERROR} from "../redux/auth-reducer";


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

        await axios.post(url, authData).then(response => {
            console.log('response', response);
            const data = response.data;
            if(data.status === 'error'){
                dispatch(authError(data.message));
                return
            }
            localStorage.setItem('access_token', data.body.access_token);
            localStorage.setItem('refresh_token', data.body.refresh_token);
            dispatch(authSuccess(data.body.access_token, data.body.refresh_token));
        }).catch(function (error) {
            console.log('error', error);
        });
    }
}

export function authError(authError) {
    return{
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
