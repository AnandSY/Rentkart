import { SET_USERS_LIST, SET_USER_DATA } from '../action';

export const initialState = {
  userData: {},
  userList: [],
};

const userReducer = (state= initialState, actions) => {
  switch(actions.type) {
    case SET_USER_DATA: 
      return {
        ...state,
        userData: actions.payload,
      };
    case SET_USERS_LIST:
      return {
        ...state,
        userList: actions.payload,
      };
    default : 
      return state;
  }
}

export default userReducer;