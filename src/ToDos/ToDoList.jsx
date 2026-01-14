import { useSelector } from "react-redux"
import ToDoItem from "./ToDoItem"
import { Link } from "react-router-dom"

export default function ToDoList()
{
   const tasks = useSelector(state=>state.tasks) 
   
   return <div>
   <div className="header">
         <h1>Your To Do List</h1>
   </div>

   <button className="addToDo"> <Link to="/AddToDo" className="addToDoLink">Add New ToDo</Link></button>
  
   <table>
       <thead>
           <tr>
               <th>Task ID</th>
               <th>Task Name</th>
               <th>Task Description</th>
               <th>Is Completed</th>
               <th>Delete</th>
           </tr>
       </thead>
 
        <tbody>
            {          
                tasks.map((todo)=>
                {         
                  return  <ToDoItem key={todo.id} task={todo}></ToDoItem>   
                })
            }
        </tbody>

   </table></div>
}