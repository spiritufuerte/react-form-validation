import React, {useEffect, useState} from 'react';
import Me from "./Me";
import axios from "axios";
import {connect, useDispatch} from "react-redux";
import {authSuccess} from "../../api/api";

export const api = axios.create({
    baseURL: 'http://142.93.134.108:1111',
});

export const apiRefresh = axios.create({
    baseURL: 'http://142.93.134.108:1111',
});

const checkTokenInterceptor = (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

const responseInterceptor = (response) => {
    const data = response.data;
    localStorage.setItem('access_token', data.body.access_token);
    localStorage.setItem('refresh_token', data.body.refresh_token);
    return response;
}

api.interceptors.request.use(checkTokenInterceptor);
apiRefresh.interceptors.response.use(responseInterceptor);


const MeContainer = (props) => {

    const dispatch = useDispatch();

    async function refreshToken() {

        const infoRefresh = {
            headers: {
                'Authorization': `Bearer ${props.refresh_token}`
            }
        }

        apiRefresh.post('/refresh', null, infoRefresh).then(response => {
            const data = response.data;
            dispatch(authSuccess(data.body.access_token, data.body.refresh_token));
        }).catch(console.error);
    }


    const [message, setMessage] = useState();


    useEffect(() => {
        const getUserInfo = () => {
            api.get('/me').then(response => {
                setMessage(response.data.body.message);
            }).catch(error => {
                console.log('some erroe', error);
            });
        };
        getUserInfo();
    }, [message]);


    return (
        <Me refreshToken={refreshToken} message={message}/>
    );
}

const mapStateToProps = (state) => ({
    access_token: state.auth.access_token,
    refresh_token: state.auth.refresh_token
})

export default connect(mapStateToProps, null)(MeContainer);