import React from "react";

import Logo from "../logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="section">
        <div className="navbar">
          <div className="group">
            <a href="https://github.com/walletconnect">Github</a>
            <a href="https://docs.walletconnect.org/">Docs</a>
          </div>

          <div className="group big">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>

          <div className="group">
            <a href="#wallet">Wallets</a>
            <a href="#wallet">Apps</a>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Navbar;
