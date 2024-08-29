import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "../redux/store";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
export default function App({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </React.StrictMode>
    </>
  );
}
