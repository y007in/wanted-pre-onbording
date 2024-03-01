// actions.js
import { ADD_TODO, DELETE_TODO, Todo } from "../types";

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id,
});
