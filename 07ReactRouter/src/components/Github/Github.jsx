import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useParams } from 'react-router-dom';



function Github() {
    let data = useLoaderData();
    

    // let [data,setData]= useState("");
    // let [avatar,setAvatar]= useState("");
    // let [username,setuserName]= useState("");
    //     useEffect(()=>{
    //         fetch(`https://api.github.com/users/github`).then(res=> res.json()).then(data => {
    //             console.log(data);
    //             setData(data.followers)
    //             setAvatar(data.avatar_url)
    //             setuserName(data.name)
    //         })

    //     },[])
    
  return (
    <div className='bg-slate-400 m-6 p-4 text-3xl flex '>
        <div className='h-40 w-40 mr-20'><img src={data.avatar_url} alt="github profile"  /></div>
        <div>
        <div className='mb-9'>Username: {data.name}</div>
        <div>Github Followers : {data.followers}</div>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader= async()=>{
    const response = await fetch(`https://api.github.com/users/github`)
    return response.json()
}