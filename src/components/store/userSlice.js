import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    userData: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.userData = action.payload;
    },
    addUser: (state, action) => {
      state.userData.push(action.payload);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;

      const index = state.userData.findIndex(
        (user) => user.id === updatedUser.id,
      );

      if (index !== -1) {
        state.userData[index] = updatedUser;
      }
    },
  },
});

export const { setUsers, addUser,updateUser } = userSlice.actions;
export default userSlice.reducer;
