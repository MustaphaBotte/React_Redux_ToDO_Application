import {ACTION_TYPES} from './types'

export function addToDo(task)
{
  
 return {
   type:ACTION_TYPES.ADD_TASk,
   payload :{task:task}
 }
}
export function deleteToDo(id)
{
 return {type:ACTION_TYPES.DELETE_TASK,
   payload :{id:id}
  }
}
export function toggleToDo(id,completed)
{
 return {
   type:ACTION_TYPES.TOGGLE_TASK,
   payload : {id:id,completed}
 }
}