import React, {useEffect} from 'react';
import Me from "./Me";
import axios from "axios";
import {connect} from "react-redux";

const MeContainer = (props) => {

    const info = {headers: {
            'Authorization': `Bearer ${props.access_token}`
        }}

    useEffect(() => {
        axios.get('http://142.93.134.108:1111/me', info
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