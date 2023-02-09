export const ADD_TODO = 'ADD_TODO';
export const SET_TODO_TEXT = 'SET_TODO_TEXT';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  payload: text,
});
