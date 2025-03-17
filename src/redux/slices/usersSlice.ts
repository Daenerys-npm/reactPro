import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInfo } from "os";

interface User {
  userId: number;
  username: string;
  password: string;
}

interface Users {
  userInfo: User[]; // An array of User objects
}

const initialState: Users = {
  userInfo: [], // Initialize as an empty array
};

const usersSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      // Directly push the new user data into the userInfo array
      state.userInfo.push({
        userId: state.userInfo.length + 1, // Simple ID generation
        username: action.payload.username,
        password: action.payload.password,
      });
      console.log("User  Added:", action.payload.username);
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.userInfo = state.userInfo.filter(
        (user) => user.userId !== action.payload
      ); // Remove user by userId
      console.log("User  Deleted with ID:", action.payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
