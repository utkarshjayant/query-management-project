import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import {Link} from 'react-router-dom'
import axios from "axios"

const Register = () => {

  const [inputs, setInputs] = useState({
    username:"", 
    email:"", 
    password:"", 
    role:"",
  })

  const[err, setError] = useState(null);

  const navigate= useNavigate();

  const handleChange= e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit= async e=>{
    e.preventDefault(); //to stop refreshing page everytime we click on this
    try{
      await axios.post("/auth/register",inputs)
      navigate("/login");
    }catch(err){
      setError(err.response.data)
    }
    
  }

  //console.log(inputs);
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="text" placeholder='email' name='email' onChange={handleChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleChange}  />
        <input required type="text" placeholder='role' name='role' onChange={handleChange}  />
        <button onClick={handleSubmit}>Submit</button>
        {err && <p> {err} </p>}
        <span> Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
    
  )
}

export default Register