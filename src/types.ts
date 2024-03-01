export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export interface Todo {
  id: number;
  content: string;
}

export type Action = {
  type: string;
  payload: Todo;
};
