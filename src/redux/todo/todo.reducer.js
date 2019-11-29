import TodoActionTypes from "./todo.types";

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: "",
  todos: [],
  todo: {},
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.GET_TODOS_START: 
      return {
        ...state,
        isLoading: true
      }
    case TodoActionTypes.GET_TODOS_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        todos: action.payload.todos
      }
    case TodoActionTypes.GET_TODOS_ERROR: 
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    case TodoActionTypes.ADD_TODOS_START: 
      return {
        ...state,
        isLoading: true
      }
    case TodoActionTypes.ADD_TODOS_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, {...action.payload}]
      }
    case TodoActionTypes.ADD_TODOS_ERROR: 
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    case TodoActionTypes.UPDATE_TODOS_START: 
      return {
        ...state,
      }
    case TodoActionTypes.UPDATE_TODOS_SUCCESS: 
      return {
        ...state,
      }
    case TodoActionTypes.UPDATE_TODOS_ERROR: 
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default todoReducer;