import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const store = makeStore();
// const persistor = persistStore(store);

export { store };
export const wrapper = createWrapper(makeStore);
