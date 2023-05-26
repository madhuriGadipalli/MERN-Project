import { REGISTER_USER,REGISTER_USER_SUCCESS, REGISTER_USER_FAILED,CLEAR_REGISTRATION_DATA } from "../constants";

const initialState = {
    res:''
};

export const RegisterReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case REGISTER_USER:
           return {...state};
    case REGISTER_USER_SUCCESS:
      const updatedState = { ...state };
      updatedState.res =  action.payload?.data;
      return updatedState;
      case REGISTER_USER_FAILED:
      const upadteFailedState = { ...state };
      upadteFailedState.res = action.payload?.response?.data;
      return upadteFailedState;
     case CLEAR_REGISTRATION_DATA:
      const clearData={...state};
      clearData.res='';
      return clearData;
    default:
      return state;
  }
};
