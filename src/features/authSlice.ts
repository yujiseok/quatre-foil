import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  user: {
    email: string;
    displayName: string;
    profileImg?: string;
  };
  accessToken: string;
}

const initialState: InitialState = {
  user: {
    email: "",
    displayName: "",
    profileImg: "",
  },
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload.user.email;
      state.user.displayName = action.payload.user.displayName;
      state.user.profileImg = action.payload.user.profileImg;
      state.accessToken = action.payload.accessToken;
    },
    logOutAction: (state) => {
      state.user.email = "";
      state.user.displayName = "";
      state.user.profileImg = "";
      state.accessToken = "";
    },
    editUser: (state, action) => {
      state.user.displayName = action.payload.displayName;
      state.user.profileImg = action.payload.profileImg;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logOutAction, editUser } = authSlice.actions;
