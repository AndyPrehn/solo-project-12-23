const incomeReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_INCOME':
        return action.payload;
      case 'ADD_INCOME':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default incomeReducer;