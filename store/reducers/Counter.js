const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/increase_count':
      return { ...state, count: state.count + 1 };
    case 'counter/decrease_count':
      return { ...state, count: state.count - 1 };
  }
  return state;
};

export default counter;
