import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import createSocialAccountReducer from "./createSocialAccount/createSocialAccount.reducer";
import chatReducer from "./chat/chat.reducer";
import notificationReducer from "./notification/notification.reducer";

const RootReducer = combineReducers({
  auth: authReducer,
  createSocialAccount: createSocialAccountReducer,
  chats: chatReducer,
  notifications: notificationReducer,
});

export default RootReducer;
