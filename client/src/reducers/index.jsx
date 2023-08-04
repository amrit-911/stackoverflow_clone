import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./question";
import usersReducer from "./users";
import otpReducer from "./otp";
import chatReducer from "./chat";

export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
  otpReducer,
  chatReducer
});
