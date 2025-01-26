import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "../redux/store";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { hotjar } from "react-hotjar";
export default function App({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  React.useEffect(() => {
    // Initialize Hotjar with your Hotjar ID and Snippet Version

    const YOUR_HOTJAR_ID = 5281348;
    const HOTJAR_VERSION = 6;
    hotjar.initialize(YOUR_HOTJAR_ID, HOTJAR_VERSION);
  }, []);
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
