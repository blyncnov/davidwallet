import React from "react";

import { BsFillChatFill } from 'react-icons/bs'


import New from "./components/new";
import Footer from "./components/footer";
import Wallet from "./components/wallet";

import "./global.css";

const App = () => {
  return (
    <div>
      <div className="tawk">
        <div className="tawk__inner">
          <a href="https://tawk.to/chat/6261631f7b967b11798bd379/1g166mdk7">
            <BsFillChatFill style={{ fontSize: "2em" }} />
          </a>
        </div>
      </div>
      <New />
      <br />
      <br />
      <Wallet />
      <Footer />
    </div>
  );
};

export default App;
