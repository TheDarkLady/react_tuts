import React, { useState } from 'react';
import CommonFormComponent from '../common-form';
import { LoginFormElements } from '../../config';

function LoginComponent() {
    const [loginFormData, setLoginFormData] = useState({
        email: '', 
        password: ''
    });
    
    return (
        <div>
            <h1>Login Component</h1>
            <CommonFormComponent
                formControls={LoginFormElements}
                formData={loginFormData}
                setFormData={setLoginFormData}
            />
        </div>
    )
}

export default LoginComponent;
