import {  FETCH_LOGIN,LOGIN_SUCCESS, LOGIN_FAILED,LOGOUT_USER } from "../constants";

const initialState = {
    res:''
};

export const SignInReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case FETCH_LOGIN:
      return { ...state };
    case LOGIN_SUCCESS:
      const updatedState = { ...state };
      updatedState.res =  action.payload?.data;
      return updatedState;
      case LOGIN_FAILED:
      const upadteFailedState = { ...state };
      upadteFailedState.res = action.payload?.response?.data;
      return upadteFailedState;
    case LOGOUT_USER:
        const updateLogoutState={...state};
        updateLogoutState.res='';
        return updateLogoutState;
    default:
      return state;
  }
};
