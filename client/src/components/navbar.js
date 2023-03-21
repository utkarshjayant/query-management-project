import React from 'react'
import Logo from "../images/samsunglogo.png"
import {Link} from 'react-router-dom'
import { useContext} from 'react';
import {AuthContext} from "../contex/authContext";

function Navbar() {

 const {currentUser, logout} = useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <Link to='/'>
                    <img src={Logo}></img>
                </Link>
                
            </div>
            <div className="links">
                <Link className='link' to ="/?cat=registered">
                    <h6>Registered</h6>
                </Link>
                <Link className='link' to ="/?cat=approved">
                    <h6>Approved</h6>
                </Link>
                <Link className='link' to ="/?cat=inprogress">
                    <h6>In Progress</h6>
                </Link>
                <Link className='link' to ="/?cat=rejected">
                    <h6>Rejected</h6>
                </Link>
                <span>{currentUser?.username}</span>
                {currentUser?(<span onClick={logout}>Logout</span>) : (<Link className="link" to= "/login">Login</Link>)}
                <span className="write">
                    <Link className="link" to="/write">New</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar