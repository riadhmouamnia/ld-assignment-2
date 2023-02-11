import { User, LOGIN_SUCCESS } from "./actions/types";

const initialState = {
  authenticatedUser: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticatedUser: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
