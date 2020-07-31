import { combineReducers } from "redux";
import * as actions from "../actions";

const initialState = {
  todos: [
    { content: "Hello", id: "checkbox-1" },
    { content: "Word", id: "checkbox-2" },
    { content: "World", id: "checkbox-3" },
  ],
  activeFilter: 'All',
  filters:['All','Active','Completed']
};

function todos(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:{
      action.todo.id=Math.random();
      return {...state,todos:[...state.todos, action.todo]};
    }

    case actions.DELETE_TODO: {
      return {...state,todos:state.todos.filter((todo) => todo.id !== action.id)};
    }

    case actions.CHANGE_FILTER:{
        return  {...state,activeFilter:action.filter}
    }

    default:
      return state;
  }
}
export default combineReducers({ todos });
