import { authConstants } from "../actions - Copy/constants - Copy";
const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        authenticate: true,
        user: action.payload.user,
        token: action.payload.token,
      };
      break;
    case authConstants.SIGNUP_SUCCESS: {
      console.log("SIGNUP SUCCESS");
      state = {
        ...state,
        authenticate: true,
      };
      break;
    }
  }
  return state;
};
