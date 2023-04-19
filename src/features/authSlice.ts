import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface User {
  email?: string;
  displayName: string;
  profileImg?: string;
}
interface InitialState {
  user: User;
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
    setUser: (state, action: PayloadAction<InitialState>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logOutAction: () => initialState,
    editUser: (state, action: PayloadAction<User>) => {
      state.user.displayName = action.payload.displayName;
      state.user.profileImg = action.payload.profileImg;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logOutAction, editUser } = authSlice.actions;
