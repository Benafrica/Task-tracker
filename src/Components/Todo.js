import React from 'react'
import {FaTimes} from 'react-icons/fa'


const todo = ({todo,onDelete,onToggle}) => {
  return (
    <div className={`task ${todo.reminder ? 'reminder' :''}`} onDoubleClick={()=> onToggle(todo.id)}>
   <h3 key={todo.id}>{todo.text} <FaTimes style={{ color:'red',cursor:'pointer'}}
   onClick={()=>{onDelete(todo.id)}}
   /></h3>
   <p key={todo.id}>{todo.day}</p>
    </div>
  )
}

export default todo
