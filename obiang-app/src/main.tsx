import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.js";

//styles
import "./globalStyles/main.scss";
import { ViewProvider } from "./context/viewContext.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ViewProvider>
        <App />
      </ViewProvider>
    </Router>
  </React.StrictMode>
);
