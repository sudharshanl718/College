import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const Registration = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/Registration', { name, email, password })
      .then(result => {
        console.log(result)
        if (result.data === "Already email is registered") {
          toast.error("Already email is registered")
        } else {
          navigate('/Login')
          toast.success("Registration completed successfully")
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <div className='apply'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-primary pb-3'>Register</h3>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingName" placeholder="name@example.com" onChange={(e) => setName(e.target.value)} required />
          <label for="floatingName">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <label for="floatingPassword">Password</label>
        </div>
        <button type='submit' className='text-white p-1 mt-3 bg-primary'>Register</button>
        <p className='mt-2'>Already have an account <Link to={"/Login"} className='text-primary'>Login</Link> </p>
      </form>
    </div>
  )
}

export default Registration