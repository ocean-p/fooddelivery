export const actionType = {
  SET_USER: 'SET_USER',
}

const reducer = (state, action) => {
  
  switch(action.type){
    case actionType.SET_USER:
      console.log('set user')
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

export default reducer;