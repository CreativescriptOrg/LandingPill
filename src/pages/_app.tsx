import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<React.StrictMode>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<Component {...pageProps} />
					</PersistGate>
				</Provider>
			</React.StrictMode>
		</>
	);
}
