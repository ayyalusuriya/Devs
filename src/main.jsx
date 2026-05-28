import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./styles/style.css";

import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import MainPage from "./pages/MainPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <Routes>

      <Route
        path="/"
        element={<Question1 />}
      />

      <Route
        path="/question2"
        element={<Question2 />}
      />

      <Route
        path="/question3"
        element={<Question3 />}
      />

      <Route
        path="/main"
        element={<MainPage />}
      />

    </Routes>

  </BrowserRouter>
);