import React from "react";

import New from "./components/new";
import Footer from "./components/footer";
import Wallet from "./components/wallet";

import "./global.css";

const App = () => {
  return (
    <div>
      <New />
      <br />
      <br />
      <Wallet />
      <Footer />
    </div>
  );
};

export default App;
