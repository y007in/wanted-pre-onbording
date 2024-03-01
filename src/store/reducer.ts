import { ADD_TODO, DELETE_TODO, Action, Todo } from "../types";

const initialState = {
  todos: [],
};

function reducer(state: { todos: Todo[] } = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
}

export default reducer;
