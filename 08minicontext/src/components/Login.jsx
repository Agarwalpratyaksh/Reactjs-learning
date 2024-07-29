import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'


function Login() {
    let [username, setUsername]= useState("")
    let [passsword, setPasssword]= useState("")

    const {setUser}= useContext(UserContext)

    let handleSubmit=(e)=> {
        e.preventDefault();
        setUser({username,passsword})
    }
  return (
    <div>
        <input type="text" 
        placeholder='Username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        {" "}

        <input type="text"
        placeholder='Password'
        value={passsword}
        onChange={(e)=>setPasssword(e.target.value)}
        />

        <button type="submit"
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login