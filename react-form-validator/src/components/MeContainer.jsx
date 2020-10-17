import React, {useEffect} from 'react';
import Me from "./Me";
import axios from "axios";
import {connect} from "react-redux";
import {authSuccess} from "../api/api";

const MeContainer = (props) => {

    const infoRefresh = {headers: {
            'Authorization': `Bearer ${props.refresh_token}`
        }}

    const refreshToken = () => {
        axios.post('http://142.93.134.108:1111/refresh', infoRefresh).then(function (response) {
            const data = response.data;
            localStorage.setItem('token', data.body.access_token);
            dispatch(authSuccess(data.body.access_token, data.body.refresh_token));
        })
    }


    const infoAceess = {headers: {
            'Authorization': `Bearer ${props.access_token}`
        }}

    useEffect(() => {
        axios.get('http://142.93.134.108:1111/me', infoAceess
        ).then(function (response) {

        }).catch(function (error) {
                console.log(error);
            }
        );
    });
    return(
        <Me {...props}/>
    );
}

const mapStateToProps = (state) => ({
    access_token:  state.auth.access_token
})

export default connect(mapStateToProps, null)(MeContainer);