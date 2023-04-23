import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "features/authSlice";
import cartReducer from "features/cartSlice";
import purchaseReducer from "features/purchaseSlice";
import toggleReducer from "features/toggleSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart", "purchase"],
};

const rootReducer = combineReducers({
  toggleReducer,
  auth: authReducer,
  cart: cartReducer,
  purchase: purchaseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
