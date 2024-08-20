import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
	configureStore({
		reducer: persistedReducer,
	});

const store = makeStore();
const persistor = persistStore(store);

export { store, persistor };
export const wrapper = createWrapper(makeStore);
