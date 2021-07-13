import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import request from "./Auth";

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
        try {
            const response = await request('POST', 'api/registration', credentials);
            if (response.data) {
                return JSON.stringify(response.data);
                history.push("/login");
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
                        <input className={"input-element"}
                               type="fistName"
                               onChange={handleFistNameChange}
                        />
                    </div>
                    <div className={"input-field"}>
                        <p className={"register-label"}>Last Name</p>
                        <input className={"input-element"}
                               type="lastName"
                               onChange={handleLastNameChange}/>
                    </div>
                    <div className={"input-field"}>
                        <p className={"register-label"}>Enter Email</p>
                        <input className={"input-element"}
                               type="text"
                               onChange={handleEmailChange}
                        />
                    </div>
                    <div className={"input-field"}>
                        <p className={"register-label"}>Password</p>
                        <input className={"input-element"}
                               type="password"
                               onChange={handlePasswordChange}
                        />
                    </div>
                    <div className={"register-button"}>
                        <button
                            id={"register-submit"}
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