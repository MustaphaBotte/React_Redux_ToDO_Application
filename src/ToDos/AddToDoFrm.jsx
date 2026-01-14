import { useDispatch } from "react-redux"
import { addToDo } from "./todoActions"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

class task
{

    id=0
    title="ok"
    description=""
    completed=false
    constructor(title,description,completed)
    {
      this.id = 10  
      this.title=title
      this.description=description
      this.completed =completed
    }
   
}


export default function AddToDoFrm()
{

    const[state,stateHandler] = useState(new task("","",false))
    let dispatch = useDispatch()
    let  navigate = useNavigate()


    let handleChanges=(event)=>
    {     
      let {name,value,type,checked} = event.target;           
      stateHandler((state)=>
      {
        return {...state,[name]:type=="checkbox"?checked:value}
      })
    } 
   
    let handleSubmit =(event)=>
    {    
     event.preventDefault();
      if(state.title=="" || state.description=="")
      {
          alert("Please enter a valid title and description!")
          return
      }
      dispatch((addToDo(state)))
      navigate("/")
    }




    return  <div className="formContent">
    <form action="" className="todoFrm">     
        <h1>Add your new todo</h1>
        <label>Todo Title</label>
        <input type="text" name="title" onChange={handleChanges}/>

        <div>
            <label >Todo Descrition</label>
            <input type="text" name="description"  onChange={handleChanges}/>
        </div>

        <div> 
            <label >IsCompleted</label>
            <input type="checkbox" name="completed"  onChange={handleChanges}/>
        </div>        
        <button type="sumbit" onClick={handleSubmit}>Add to list</button>

    </form></div>
}
