import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Menu=({cat})=> {


  const [posts, setPosts]= useState([]);


  useEffect(()=>{
    const fetchData= async ()=>{
      try{
        const res= await axios.get(`/posts?cat=${cat}`) // await get request
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[cat])
  // const posts= [
  //   {
  //     id:1,
  //     title:"query number 1",
  //     desc: "blah blah blah",
  //   },
  //   {
  //     id:2,
  //     title:"query number 1",
  //     desc: "blah blah blah",
  //   },
  //   {
  //     id:3,
  //     title:"query number 1",
  //     desc: "blah blah blah",
  //   },
  //   {
  //     id:4,
  //     title:"query number 1",
  //     desc: "blah blah blah",
  //   },
  // ];
  return (
    <div className="menu">
      <h1>Other queries</h1>
      {posts.map((post)=>(
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <button>Read More</button>
            </div>
          ))}
    </div>
  )
}

export default Menu
