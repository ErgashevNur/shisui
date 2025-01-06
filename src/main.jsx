import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./app/store.js";
import "./index.css";
import App from "./App.jsx";

import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);
