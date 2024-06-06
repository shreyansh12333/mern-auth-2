import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user";
import storage from "redux-persist/lib/storage";

// import persistReducer from "redux-persist/es/persistReducer";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  storage,
  version: 1,
  key: "root",
};

const persistReducere = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducere,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
