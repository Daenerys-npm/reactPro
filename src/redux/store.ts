import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import usersReduer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReduer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
