import TodoActionTypes from "./todo.types";
import api from '../../api';
export const getTodosStart = () => ({
  type: TodoActionTypes.GET_TODOS_START,
});

export const getTodosSuccess = todos => ({
  type: TodoActionTypes.GET_TODOS_SUCCESS,
  payload: todos
});

export const getTodosError = error => ({
  type: TodoActionTypes.GET_TODOS_ERROR,
  payload: error
});

export const getTodosAsync = (filter) => {
  return dispatch => {
    dispatch(getTodosStart());
    api.getTodos(filter)
      .then(todos => {
        dispatch(getTodosSuccess(todos))
      })
      .catch(error => dispatch(getTodosError(error)));
  }
}

export const addTodosStart = () => ({
  type: TodoActionTypes.ADD_TODOS_START,
});

export const addTodosSuccess = todo => ({
  type: TodoActionTypes.ADD_TODOS_SUCCESS,
  payload: todo
});

export const addTodosError = error => ({
  type: TodoActionTypes.ADD_TODOS_ERROR,
  payload: error
});

export const addTodosAsync = item => {
  return dispatch => {
    dispatch(addTodosStart());
    api.createTodo(item)
      .then(todo => {
        dispatch(addTodosSuccess(todo))
      })
      .catch(error => dispatch(addTodosError(error)));
  }
}

export const updateTodosStart = () => ({
  type: TodoActionTypes.UPDATE_TODO_START,
});

export const updateTodosSuccess = () => ({
  type: TodoActionTypes.UPDATE_TODO_SUCCESS,
});

export const updateTodosError = error => ({
  type: TodoActionTypes.UPDATE_TODO_ERROR,
  payload: error
});

export const updateTodosAsync = (id, item) => {
  return dispatch => {
    dispatch(updateTodosStart());
    api.updateTodo(id, item)
      .then(todo => {
        dispatch(getTodosAsync())
      })
      .catch(error => dispatch(updateTodosError(error)));
  }
}

export const deleteTodosStart = () => ({
  type: TodoActionTypes.DELETE_TODO_START,
});

export const deleteTodosSuccess = () => ({
  type: TodoActionTypes.DELETE_TODO_SUCCESS,
});

export const deleteTodosError = error => ({
  type: TodoActionTypes.DELETE_TODO_ERROR,
  payload: error
});

export const deleteTodosAsync = id => {
  return dispatch => {
    dispatch(deleteTodosStart());
    api.deleteTodo(id)
      .then(todo => {
        dispatch(getTodosAsync())
      })
      .catch(error => dispatch(deleteTodosError(error)));
  }
}
