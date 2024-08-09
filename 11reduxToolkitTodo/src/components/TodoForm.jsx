import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todos/todoSlice'

function TodoForm() {
    const [input,setInput]=useState("")
    const dispatch = useDispatch()

    const add=(e)=>{
        e.preventDefault()

        dispatch(addTodo(input))
        // console.log(input)
        setInput("")

    }

  return (
    <>
    
        <form onSubmit={add}>
            <input type="text" 
            className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                value={input}
                placeholder='enter Todo'
                onChange={(e)=>setInput(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    
    </>
  )
}

export default TodoForm