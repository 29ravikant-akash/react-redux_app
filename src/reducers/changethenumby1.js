const initialState = 1;

const changeTheNumberBy1 = (state = initialState, action) => {
  switch (action.type) {
    case "increment_by_1":
      return state + 1;
    case "decrement_by_1":
      return state - 1;
    default:
      return state;
  }
};

export default changeTheNumberBy1;
