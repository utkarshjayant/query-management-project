import React, {useNavigate, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
import { useContext, AuthContext } from 'react'

const Login = () => {

  const [inputs, setInputs] = useState({
    username:"", 
    password:"",
  })

  const[err, setError] = useState(null);

  const navigate= useNavigate()

  const {login} = useContext(AuthContext);

  const handleChange= e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit= async e=>{
    e.preventDefault(); //to stop refreshing page everytime we click on this
    try{
      await login(inputs)
      navigate("/");
    }catch(err){
      setError(err.response.data)
    }
    
  }
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username' name="username" onChange={handleChange}/>
        <input required type="password" placeholder='password' name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
        { err && <p>{err}</p>}
        <span> Don't you have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
    
  )
}

export default Login