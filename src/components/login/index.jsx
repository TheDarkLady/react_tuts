import React, { useState } from 'react';
import CommonFormComponent from '../common-form';
import { LoginFormElements } from '../../config';

const initialState = {
    email: '',
    password: ''
}
function LoginComponent() {
    const [loginFormData, setLoginFormData] = useState(initialState);
    console.log(loginFormData, "loginFormData")
    function onHandleSubmit(e) {
        e.preventDefault();
        console.log(loginFormData);

        // api logic &  database l
        setLoginFormData(initialState)
    }
    return (
        <div>
            <h1>Login Component</h1>
            <CommonFormComponent
                formControls={LoginFormElements}
                formData={loginFormData}
                setFormData={setLoginFormData} buttonText={'Login'}
                onHandleSubmit={onHandleSubmit}
            />
        </div>
    )
}

export default LoginComponent;
