import { call, put, takeEvery } from "redux-saga/effects";
import { login } from "../slices/authSlice"; // Adjust the path as necessary
import { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the login action
interface LoginAction
  extends PayloadAction<{ username: string; password: string }> {}

// Function to fetch user data from the JSON file
const fetchUsers = async () => {
  const response = await fetch("/path/to/users.json"); // Adjust the path as necessary
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Worker saga for handling login
function* handleLogin(action: LoginAction) {
  try {
    const users: Array<{ username: string; password: string }> = yield call(
      fetchUsers
    ); // Fetch users from the JSON file
    const { username, password } = action.payload;

    // Check if the user exists and the password matches
    const user = users.find(
      (user: { username: string; password: string }) =>
        user.username === username && user.password === password
    );

    if (user) {
      // If user is found, dispatch the login action
      yield put(login({ username }));
      console.log("Login successful");
    } else {
      console.log("Invalid username or password");
      // Handle invalid login (e.g., show an error message)
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}

// Watcher saga for login actions
function* watchLogin() {
  yield takeEvery("auth/loginRequest", handleLogin); // Listen for loginRequest actions
}

export default watchLogin;
