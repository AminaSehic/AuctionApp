import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useHistory} from "react-router-dom";
import request from "./Auth";

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
        password: '',
        rememberMe: ''
    })
    useEffect(() => {
        if (localStorage.checkbox && localStorage.checkbox !== "") {
            setCredentials({
                ...credentials,
                ...{
                    email: localStorage.email,
                    rememberMe: localStorage.checkbox
                }
            })
        } else {
            setCredentials({
                ...credentials,
                ...{
                    email: "",
                    rememberMe: ""
                }
            })
        }
    }, []);
    const lsRememberMe = () => {
        if (credentials.rememberMe && credentials.email !== "") {
            localStorage.email = credentials.email;
            localStorage.checkbox = credentials.rememberMe;
        } else {
            localStorage.email = "";
            localStorage.checkbox = "";
        }
    }
    const handleEmailChange = (e) => {
        setCredentials({
            ...credentials,
            ...{email: e.target.value.toString()}
        })
    }
    const handleRememberMeChange = (e) => {
        setCredentials({
            ...credentials,
            ...{rememberMe: e.target.checked}
        })
    }
    const handlePasswordChange = (e) => {
        setCredentials({
            ...credentials,
            ...{password: e.target.value.toString()}
        })
    }
    const handleLoginClick = async (e) => {
        lsRememberMe();
        try {
            const response = await request('POST', '/api/login', credentials);
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
                               id={"email"}
                               value={credentials.email}
                               onChange={handleEmailChange}
                        />
                    </div>
                    <div className={"input-field"}>
                        <p className={"login-email-label"}>Password</p>
                        <input className={"login-input"}
                               type="password"
                               onChange={handlePasswordChange}/>
                    </div>
                    <div>
                        <input type={"checkbox"} value={"lsRememberMe"} id={"rememberMe"}
                               checked={credentials.rememberMe}
                               onChange={handleRememberMeChange}/>
                        <label htmlFor={"rememberMe"}>Remember me </label>
                    </div>
                    <div className={"login-button"}>
                        <button
                            onClick={handleLoginClick}
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