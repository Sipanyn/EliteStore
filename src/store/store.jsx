import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { combineReducers } from "redux";

// export const store = configureStore({
//   reducer: { product: productReducer },
// });
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product"], // only persist these slices
};
const rootReducer = combineReducers({
  product: productReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Correct spelling
    }),
});
export const persistor = persistStore(store);
