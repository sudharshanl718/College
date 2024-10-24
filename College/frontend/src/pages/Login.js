import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/Login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/')
                    toast.success('Welcome to Best University')
                } else if(result.data==="The password is incorrect"){
                    toast.error('Password is incorrect')
                } else if(result.data==="Username name not found"){
                    toast.error('Username name is not found')
                }
            })
            .catch(err => console.log(err));

    }

    return (
        <div className='apply'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-primary pb-3'>Login</h3>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button type='submit' className='text-white p-1 mt-3 bg-primary'>Login</button>
            </form>
        </div>
    )
}

export default Login