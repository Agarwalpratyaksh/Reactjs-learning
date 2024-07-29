//making a counter using hooks and adding a upper limit of 20 and least limit of 0(no negative number)



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)

  
  const addVal= ()=>{
    if (counter>=20) {
      setCounter(20)
      }
      else{
        counter=counter+1
        setCounter(counter)
        console.log("value added",counter)
        
      }

  }
  const removeVal= ()=>{
      if(counter<=0){
        counter=0
        setCounter(counter)
      }else{
            setCounter(counter-1)
            console.log("value removed",counter)
          } 
  
  }

  return (
    <>
      <h1>Pratyaksh agarwal</h1>
      
      <button onClick={addVal}>Add value</button><br /><br />
      <button onClick={removeVal}>Remove value</button>
      <h2>Counter : {counter}</h2>

    </>
  )
}

export default App
