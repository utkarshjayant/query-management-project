import axios from 'axios';
import React , {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
const Home = () => {

  const [posts, setPosts]= useState([]);

  const cat = useLocation().search

  useEffect(()=>{
    const fetchData= async ()=>{
      try{
        const res= await axios.get(`/posts${cat}`) // await get request
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
    <div className="home">
        <div className="posts">
          {posts.map((post)=>(
            <div className="post" key={post.id}>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                </Link>  
                    <p>{post.desc}</p>
                    <button>Read more</button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Home;