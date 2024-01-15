const expensesReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_EXPENSES':
        return action.payload;
      case 'UNSET_EXPENSES':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default expensesReducer;