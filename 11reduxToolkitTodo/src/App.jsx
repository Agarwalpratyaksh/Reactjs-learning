import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/todo'
import TodoForm from './components/todoForm'


function App() {
  

  return (
    <>
    <h1>Todos..</h1>
    <br />
    <br />
    <TodoForm/>
    <Todo/>
    </>
  )
}

export default App
