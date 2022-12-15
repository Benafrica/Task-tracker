import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import About from "./Components/About";
import AddTodo from "./Components/AddTodo";
import { BrowserRouter as Router , Route,r } from "react-router-dom";
import { useState,useEffect} from "react"


function App() {

  //global state 
const [todos,setTodos] = useState([])

useEffect(()=>{
  const getTasks = async () => {
    const tasksFromServer = await fetchTodos()
    setTodos(tasksFromServer)
  }
  
   getTasks()

}, [])

// fetching data from the sever
const fetchTodos = async () => {
  const res = await fetch ('http://localhost:5000/todos')
   const data = await res.json()

   return data
 
}
// fetching  single data  from the sever
const fetchTodo = async (id) => {
  const res = await fetch (`http://localhost:5000/todos/${id}`)
   const data = await res.json()

   return data
 
}

 const [showAddTodo,setAddTodo] = useState (false)

   // deleting a todo
 const deleteTodo = async (id) => {
   await fetch(`http://localhost:5000/todos/${id}`, {
    method: 'DELETE',
   })
 setTodos(todos.filter((todo)=>todo.id !== id))
 
 }

 //Add todo

const addTodo = async (todo) =>{
const res = await fetch ('http://localhost:5000/todos', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(todo)
})
const data =  await res.json()
setTodos([...todos, data])

}
 



// creating ID since we are not enteracting wit Db

// const id = Math.floor(Math.random()*10000) +1

// const newTodo = {id, ...todo}
// setTodos([...todos,newTodo])
 
 

 // toggle reminder

const toggleReminder = async (id) => {

const todoToToggle = await fetchTodo(id)
const updTask = { ...todoToToggle,
 reminder: !todoToToggle.reminder}

 const res = await fetch (`http://localhost:5000/todos/${id}`,{
  method:'PUT',
  headers:{
    'content-type':'application/json'
  },
  body: JSON.stringify(updTask)

 })

 const data = await res.json()


 setTodos(
 todos.map((todo)=> todo.id === id ?{...todo,reminder:!data.reminder}:todo)
 )
}
 

  return (
    <Router>
    <div className="Container">

    <Header  onAdd={()=>setAddTodo(!showAddTodo)} showAdd={showAddTodo} title={'Task Tracker'} />
    {showAddTodo && <AddTodo onAdd={addTodo} />}
    { todos.length >0 ?<Todos todos={todos}  onDelete={deleteTodo} onToggle={toggleReminder}/>  :'no task to show ' }
      
      <Route path= '/about' component={About}/>

    <Footer/>
   
    </div>
    </Router>
  );
}



export default App;
