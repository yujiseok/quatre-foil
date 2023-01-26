import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from "features/categorySlice";
import toggleReducer from "features/toggleSlice";

const rootReducer = combineReducers({
  toggleReducer,
  categoryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
