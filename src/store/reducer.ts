interface Action {
  type: string;
  payload?: any;
}

interface State {}

let initialState: State = {};

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
