export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log(state.users)
      console.log('adding ', action.user);
      return {
        ...state,
        users: [...state.users, action.user]
      }
    case 'SHOW_USERS':
      return {
        users: state.users
      }

    default:
      return state;
  }
};
