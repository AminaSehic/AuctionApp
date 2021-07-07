import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from "react-router-dom";

function LoginNavbar() {
    return (
        <div className={"gray-navbar"}>
            <p className={"left-item"}>LOGIN </p>
        </div>
    );
}

const Login = () => {
    let history = useHistory();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleEmailChange = (e) => {
        setCredentials({
            ...credentials,
            ...{email: e.target.value.toString()}
        })
    }
    const handlePasswordChange = (e) => {
        setCredentials({
            ...credentials,
            ...{password: e.target.value.toString()}
        })
    }
    const handleClick = async (e) => {
        const url = "http://localhost:8080/api/login"
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }
        try {
            const response = await axios.post(url, credentials, config);
            if (response.data) {
                return JSON.stringify(response.data);
                history.push("/aboutUs");
            }
        } catch (err) {
            console.log(err.data);
        }
    }
    return (
        <div className={"container"}>
            <LoginNavbar/>
            <div className="login-wrapper">
                <h1 className={"login-h1"}>LOGIN</h1>
                <form className={"login-form"}
                      action="javascript:void(0)">
                    <div className={"input-field"}>
                        <p className={"login-email-label"}>Enter Email</p>
                        <input className={"login-input"}
                               type="text"
                               onChange={handleEmailChange}
                        />
                    </div>
                    <div className={"input-field"}>
                        <p className={"login-email-label"}>Password</p>
                        <input className={"login-input"}
                               type="password"
                               onChange={handlePasswordChange}/>
                    </div>
                    <div className={"login-button"}>
                        <button
                            onClick={handleClick}
                            type="submit">
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;