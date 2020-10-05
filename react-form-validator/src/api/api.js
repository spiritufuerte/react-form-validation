import axios from "axios";
import {updateTokens} from "../redux/user-reducer";
import {reset} from "redux-form";

export const userAPI = {
    signup(values) {
        axios.post('http://142.93.134.108:1111/sign_up', values).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    },
    login(values) {
        axios.post(`http://142.93.134.108:1111/login?email=${values.email}&password=${values.password}`).then(function (response) {
            console.log(response);
        });
    },
    getAccessToken(access_token) {
        axios.get('http://142.93.134.108:1111/me', {
            headers: {
                'Authorization': `Bearer${access_token}`
            }
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }
}