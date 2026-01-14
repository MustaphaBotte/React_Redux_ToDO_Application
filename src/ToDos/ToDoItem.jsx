import { useDispatch } from 'react-redux'
import {addToDo,deleteToDo, toggleToDo} from  './todoActions'

export default function ToDoItem({task})
{
 let dispatch = useDispatch()
 return <tr key={task.id}>
    <td>{task.id}</td>
    <td>{task.title}</td>
    <td>{task.description}</td>
    <td> <input type="checkbox" checked={task.completed} onChange={(event)=>dispatch(toggleToDo(task.id,event.target.checked))}></input></td>
    <td><button className='DeleteBtn' onClick={()=>dispatch(deleteToDo(task.id))}>Delete</button></td>
 </tr>
}