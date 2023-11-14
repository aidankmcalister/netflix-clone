// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import favoritesReducer from "./favoritesSlice";

const userPersistConfig = {
  key: "user",
  storage: storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    favorites: favoritesReducer,
  },
});

export const persistor = persistStore(store);

export default store;
