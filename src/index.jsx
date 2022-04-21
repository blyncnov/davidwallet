import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Routes

} from "react-router-dom";

import "./index.css";
import "./homepage.css";

import Phrase from "./components/phrase";
import JsonPage from "./components/json";
import Keystore from "./components/keystore";
import MainHome from "./components/MainHome";
import HomePage from "./components/Homepage";

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="connect" element={<MainHome />} />
          <Route exact path="phrase" element={<Phrase />} />
          <Route exact path="keystore" element={<Keystore />} />
          <Route exact path="private" element={<JsonPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));


