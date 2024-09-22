import { useState } from 'react'
function FormComponent(){
    // const [nameValue, setNameValue] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
    function handleOnChange(e){
        console.log(formData)
        const {name, value} = e.target;
        setFormData({...formData, 
            
            [name]: value
            // [email]: value
        })
    }
    function handleClick(){
        console.log(formData)
    }
    return(
        <div>
            <h1>Form Component</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(nameValue, "nameValue")
            }}>
            <input value={formData.name} type="text"  name="name" id="name" placeholder="Enter your name" onChange={handleOnChange}/>
            <input value={formData.email} type="email"  name="email" id="email" placeholder="Enter your email" onChange={handleOnChange}/>
            <button type='submit' onClick={handleClick}>Submit</button>
            </form>

        </div>
    )
}
export default FormComponent