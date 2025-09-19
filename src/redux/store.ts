import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import usersReduer from "./slices/usersSlice";
import createSagaMiddleware from "redux-saga";
import watchLogin from "./sagas/authSaga";
import useProReducer from "./slices/userProSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReduer,
    userPro: useProReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(watchLogin);

export default store;
