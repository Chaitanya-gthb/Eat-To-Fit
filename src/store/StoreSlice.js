import { createSlice } from "@reduxjs/toolkit";

const LogSlice = createSlice({
  name: "log",

  initialState: {
    isLog: false,
    user: {
      userName: '',
      email: '',
    },
  },

  reducers: {
    Login: (state, action) => {
      state.isLog = true;
      state.user = action.payload;
    },

    LogOut: (state) => {
      state.isLog = false;
      state.user = {userName: "", email: ""};
    },
  },
});

export const { Login, LogOut } = LogSlice.actions;
export default LogSlice.reducer;
