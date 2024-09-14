import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import AgoraRTC and AgoraRTCProvider
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";

// Create the AgoraRTC client
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

// Get the root element where your app will render
const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap your App with AgoraRTCProvider
root.render(
  <React.StrictMode>
    <AgoraRTCProvider client={client}>
      <App />
    </AgoraRTCProvider>
  </React.StrictMode>,
);

// Measure performance
reportWebVitals();
