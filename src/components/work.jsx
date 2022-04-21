import React from "react";

const Work = () => {
  return (
    <div>
      <div className="sect">
        <div className="sec">
          <h2 className="check">What is WalletConnect?</h2>

          <p>
            WalletConnect is an open source protocol for connecting
            decentralised applications to mobile wallets with QR code scanning
            or deep linking. A user can interact securely with any Dapp from
            their mobile phone, making WalletConnect wallets a safer choice
            compared to desktop or browser extension wallets.
          </p>
        </div>
        <br />
        <br />
        <div className="sec">
          <h2 className="check">How does it work?</h2>

          <p>
            WalletConnect connects web applications to supported{" "}
            <span> mobile wallets</span>. WalletConnect session is started by a
            scanning a QR code (desktop) or by clicking an application deep link
            (mobile).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
