//props mtlb like components mai jo cards hai unki values dynamically change krna like app.jsx mai jo dalenge wo props haii properties

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Cards"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 font-bold text-black p-4 rounded-xl pb-6 mb-5'>Pratyaksh</h1>
      <div className='gigiaCard'>
      <Card username="Pratyaksh" password="1234" btnText="click me"/>
      <Card username="Rohan" password="4321" btnText="view profile"/>
      </div>
    

    </>
  )
}

export default App
