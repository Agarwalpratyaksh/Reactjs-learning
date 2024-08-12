import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_MYNAME)

  return (
    <>
    <h1>{import.meta.env.VITE_MYNAME}</h1>
    </>
  )
}

export default App
