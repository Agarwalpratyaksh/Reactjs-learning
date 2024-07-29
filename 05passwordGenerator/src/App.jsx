import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [length,setLength]= useState(8)
  const [charAllowed,setcharAllowed]= useState(false)
  const [numberAllowed,setnumberAllowed]= useState(false)
  const [password,setPassword]= useState("")

  

  let passwordGenerator =useCallback(()=>{
      let pass= ""
      let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed){str=str+"0123456789"}
      if(charAllowed){str=str +"!@#$%&()_-{}\|?<>"}
      for (let i = 1; i <= length; i++) {
        let random = Math.floor(Math.random()*str.length)
        pass= pass+str[random]
        
      }
      setPassword(pass)},[length,charAllowed,numberAllowed,setPassword])



  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numberAllowed])

  let passwordRef = useRef(null)

  let copyToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    prompt("password coppied")
  },[password])


  return (
    <div className='bg-slate-700 w-full max-w-md mx-auto text-orange-500 my-8 rounded-xl px-4 py-3'>
      <h1 className='text-center text-white my-3 text-xl font-sans'>Password</h1>
      <div className='flex'>
        <input 
        type="text" 
        readOnly
        placeholder='Password'
        className='py-1 px-3 outline-none w-full rounded-md'
        value={password}
        ref={passwordRef}
        />
        <button className='text-white bg-blue-700 py-2 px-4 rounded-md shrink-0 outline-none' onClick={copyToClipboard}>Copy</button>
      </div>
      <div className='flex gap-x-2 mt-5'>
        <div className='flex items-center gap-x-1'>
            <input type="range" min={5} max={50} value={length} className="cursor-pointer" onChange={(e)=>{
              setLength(e.target.value)
            }}/>
            <label >length : {length}</label>
        </div>
        <div className='flex items-center'>
            <input type="checkbox" defaultChecked={charAllowed} id="char-checkbox" onChange={()=>{
              setcharAllowed((prev)=>{return !prev})
            }} />
            <label for="char-checkbox">Characters</label>
        </div>
        <div className='flex items-center'>
            <input type="checkbox" defaultChecked={numberAllowed} id="num-checkbox" onChange={()=>{
              setnumberAllowed((prev)=>!prev)
            }} />
            <label for ="num-checkbox">Number</label>
        </div>


      </div>
     

    </div>
  )
}

export default App
