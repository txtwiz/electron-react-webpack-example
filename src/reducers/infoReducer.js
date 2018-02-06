export const infoReducer = (state = { 'data': 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        'data': state.data + 1
      };

    default:
      return state;
  }
};
