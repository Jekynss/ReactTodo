export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_FILTER = 'CHANGE_FILTER'

export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export function deleteTodo(todo_id) {
  return { type: DELETE_TODO, id:todo_id };
}

export function changeFilter(new_filter){
  return { type: CHANGE_FILTER, filter: new_filter}
}