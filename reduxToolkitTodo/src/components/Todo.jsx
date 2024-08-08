import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../features/todos/todoSlice';

function Todo() {
    const todos = useSelector(state=>state.todos)
    // console.log(todos);
    const dispatch = useDispatch();
    const remove =(id)=>{
        dispatch(deleteTodo(id))
    }
  return (
    <>
    <div></div>
    <ul>
    {todos.map((todo)=>
       
        
            <li key={todo.id} className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
                <div className='w-full'>{todo.text}</div>
                <button onClick={()=>remove(todo.id)}>Delete</button>
            </li>
    )}
    </ul>
    
    </>
  )
}

export default Todo