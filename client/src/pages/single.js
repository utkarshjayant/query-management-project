import Menu from "../components/Menu.js"
import axios from 'axios';
import React , {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Navigate, useLocation, useNavigate } from 'react-router';
import moment from 'moment'
import { AuthContext } from "../contex/authContext.js";


const Single = () => {
  const [post, setPost]= useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const postId= location.pathname.split("/")[2]
  const {currentUser} = useContext(AuthContext)

  useEffect(()=>{
    const fetchData= async ()=>{
      try{
        const res= await axios.get(`/posts/${postId}`) // await get request
        setPost(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[postId])

  const handleDelete= async ()=>{
    try{
      await axios.delete(`/posts/${postId}`) 
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  

  return (
    <div className="single">
      <div className="content">
        <div className="info">
          <span>{post.username}</span>
          <p>Posted {moment(post.date).fromNow()}</p>
        </div>
        {currentUser.username===  post.username &&<div className="edit">
          <Link to={`/write?edit=2`} state={post}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>

        </div>}

        {currentUser.role==="admin" && <div className="edit">
          <button>Approve</button>
          <button>Reject</button>
        </div>}
        
        <h3>{post.title}</h3>
        {post.desc}
      </div>
      <Menu cat={post.cat}></Menu>
    </div>
  )
}

export default Single