import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import { Navigate, useLocation, useNavigate } from 'react-router';
import "react-quill/dist/quill.snow.css"
import axios from 'axios';
import moment from 'moment';

const Write = () => {

  const state= useLocation().state

  const [value, setValue]= useState(state?.desc || "");
  const [title, setTitle]= useState(state?.title || "");
  const navigate= useNavigate();

  const handleClick = async e=>{
    e.preventDefault()

    try{
      state
      ? await axios.put(`/posts/${state.id}`, {
        title, desc:value
      })
      :await axios.post(`/posts/`, {
        title, desc:value, date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      });
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="add">
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}></input>
   
        {/* <input type="text" placeholder='Query'></input>         */}
        <ReactQuill
          className="editor"
          theme= "snow"
          value={value}
          onChange={setValue}
          />
      </div>
      
      <div className="menu">
          
          <div className="buttons">
           
            <button onClick={handleClick}>Publish</button>
          </div>
       
      </div>
    </div>
  )
}

export default Write