import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import logo from "../img/logo.png"

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo"> <img  style={{height:40, mixBlendMode:'multiply'}} src={logo} alt="" /> </span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span style={{backgroundColor:" hsl(0, 38%, 49%)",height:25,alignItems:"center",padding:5,borderRadius:20}}>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar