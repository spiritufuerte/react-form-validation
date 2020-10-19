import React, {useEffect, useState} from 'react';
import Me from "./Me";
import axios from "axios";
import {connect, useDispatch} from "react-redux";
import {authSuccess} from "../../api/api";

const MeContainer = (props) => {

    const dispatch = useDispatch();

    function refreshToken() {
        const infoRefresh = {
            headers: {
                'Authorization': `Bearer ${props.refresh_token}`
            }
        }
        axios.post('http://142.93.134.108:1111/refresh', null, infoRefresh).then(function (response) {
            console.log(response);
            const data = response.data;
            dispatch(authSuccess(data.body.access_token, data.body.refresh_token));
        })
    }

    const infoAceess = {
        headers: {
            'Authorization': `Bearer ${props.access_token}`
        }
    }

    const [message, setMessage] = useState();

    useEffect(() => {
        axios.get('http://142.93.134.108:1111/me', infoAceess
        ).then(function (response) {
            setMessage(response.data.body.message);
        }).catch(function (error) {
                console.log(error);
            }
        );
    });

    return (
        <Me refreshToken={refreshToken} message={message}/>
    );
}

const mapStateToProps = (state) => ({
    access_token: state.auth.access_token,
    refresh_token: state.auth.refresh_token
})

export default connect(mapStateToProps, null)(MeContainer);