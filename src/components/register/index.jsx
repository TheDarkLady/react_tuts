import CommonFormComponent from "../common-form"
import { RegisterFormElements } from "../../config"
import { useState } from 'react'
const initialState = {
    name: "",
    email: "",
    password: ""
}


function RegisterComponent() {
    const [registerFormData, setRegisterFormData] = useState(initialState)  
    function onHandleRegisterSubmit(e) {
        e.preventDefault()
        console.log(registerFormData)
    }
    return (
        <div>
            <h1>Register Component</h1>
            <CommonFormComponent 
            formControls={RegisterFormElements} formData={registerFormData} setFormData={setRegisterFormData}
            buttonText={'Register'}
            onHandleSubmit={onHandleRegisterSubmit}/>
        </div>
    )
}

export default RegisterComponent