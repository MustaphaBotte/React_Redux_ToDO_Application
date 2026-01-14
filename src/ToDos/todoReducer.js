import getID from './counter';
import {ACTION_TYPES} from './types'

let initialState = { tasks: 
    [
      { id: 1, title: "learn react",description: "i will learn react ", completed: false },
      { id: 2, title: "learn .Net core",description:"i will build some projects ", completed: true }] 
    }


export function todoReducer(state = initialState , action)
{     

 switch (action.type)
 {  
    case  ACTION_TYPES.ADD_TASk :
        action.payload.task.id=getID()
        return {...state,tasks:[...state.tasks,action.payload.task]}
        break;

    case  ACTION_TYPES.DELETE_TASK :
            return {...state,tasks:state.tasks.filter(task=>task.id !=action.payload.id)}
            break;  

   case  ACTION_TYPES.TOGGLE_TASK :
            return {...state,tasks:state.tasks.map(task=>task.id ==action.payload.id?task={...task,completed:action.payload.completed}:task)}
            break;    
   default :
      return state;           
 }
 
}