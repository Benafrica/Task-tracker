
import Todo from "./Todo"


const Todos =({todos,onDelete,onToggle}) =>{ 
  



    return (
        <div className="task">

       {todos.map((todo, index)=>(<Todo  key ={index} todo={todo} onDelete={onDelete} onToggle={onToggle}/>))}
   

        </div>
    )
}

export default Todos
