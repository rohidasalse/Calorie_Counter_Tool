import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";

// import App from "./App";

// import reportWebVitals from "./reportWebVitals";
// import Day23FormikAndYup from "./components/Day23FormikAndYup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Day23FormikAndYup></Day23FormikAndYup> */}
  </React.StrictMode>
);

// reportWebVitals();
