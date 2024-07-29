import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  let redColor=()=>{
    console.log("Red")
    setColor("red")
  }
  let yellowColor=()=>{
    console.log("yellow")
    setColor("yellow")

  }
  let greenColor=()=>{
    console.log("green")
    setColor("green")

  }
  let blueColor=()=>{
    console.log("blue")
    setColor("blue")

  }
  let pinkColor=()=>{
    console.log("pink")
    setColor("pink")

  }

  

  return (
    <div className='w-full h-screen duration-1000' style={{backgroundColor:color}}> 
      <div className='styleabar flex felx-wrap mx-auto justify-evenly bg-gray-300 p-3 rounded-3xl w-3/4 '>
        
        <button className='bg-red-500 p-4 pl-6 pr-6 rounded-xl' onClick={redColor}>Red</button>
        <button className='bg-yellow-300 p-4 pl-6 pr-6 rounded-xl' onClick={yellowColor}>Yellow</button>
        <button className='bg-green-500 p-4 pl-6 pr-6 rounded-xl' onClick={greenColor}>Green</button>
        <button className='bg-blue-500 p-4 pl-6 pr-6 rounded-xl' onClick={blueColor}>Blue</button>
        <button className='bg-pink-400 p-4 pl-6 pr-6 rounded-xl' onClick={pinkColor}>Pink</button>
      </div>
        
      
    </div>
  )
}

export default App
