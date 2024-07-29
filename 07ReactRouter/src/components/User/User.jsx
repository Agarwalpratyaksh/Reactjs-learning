import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}= useParams()
  return (
    <>
    <div className='bg-slate-500 px-12 py-4 text-lg m-20 flex'>
        <div className='text-6xl'>Parameter : {userId}</div>
        
    
    </div>
    </>
  )
}

export default User