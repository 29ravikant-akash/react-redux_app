const initialState = 10;

const changeTheNumberBy10 = (state = initialState, action) => {
  switch (action.type) {
    case "increment_by_10":
      return state + 10;
    case "decrement_by_10":
      return state - 10;
    case "multiply_by_10":
      return state * 2;
    default:
      return state;
  }
};

export default changeTheNumberBy10;
