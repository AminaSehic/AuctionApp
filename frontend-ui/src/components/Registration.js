import React, {useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

function RegisterNavbar() {
    return (
        <div className={"gray-navbar"}>
            <p className={"left-item"}>REGISTER </p>
        </div>
    );
}

const Register = () => {
    let history = useHistory();
    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const handleFistNameChange = (e) => {
        setCredentials({
            ...credentials,
            ...{firstName: e.target.value.toString()}
        })

    }
    const handleLastNameChange = (e) => {
        setCredentials({
            ...credentials,
            ...{lastName: e.target.value.toString()}
        })
    }
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
        const url = "http://localhost:8080/api/registration"
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
            <RegisterNavbar/>
            <div className="register-wrapper">
                <h1 className={"register-h1"}>REGISTER</h1>
                <form className={"register-form"}
                      action="javascript:void(0)">
                    <div className={"input-field"}>
                        <p className={"register-label"}>First Name</p>
                        <input className={"register-input"}
                               type="fistName"
                               onChange={handleFistNameChange}
                        />
                    </div>
                    <div className={"input-field"}>
                        <p className={"register-label"}>Last Name</p>
                        <input className={"register-input"}
                               type="lastName"
                               onChange={handleLastNameChange}/>
                    </div>
                    <div className={"input-field"}>
                        <p className={"register-label"}>Enter Email</p>
                        <input className={"register-input"}
                               type="text"
                               onChange={handleEmailChange}
                        />
                    </div>
                    <div className={"input-field"}>
                        <p className={"register-label"}>Password</p>
                        <input className={"register-input"}
                               type="password"
                               onChange={handlePasswordChange}
                        />
                    </div>
                    <div className={"register-button"}>
                        <button
                            onClick={handleClick}
                            type="submit">REGISTER
                        </button>
                    </div>
                    <div className={"already-have-account"}>
                        <p className={"already-have-account-text"}>
                            Already have an account?
                        </p>
                        <Link to="/login" className={"already-have-account-link"}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;