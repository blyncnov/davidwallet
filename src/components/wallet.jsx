import React from "react";
import Data from "../data";

// import PhaseKey from "./phase"
import Wallets from "../components/wallets";

const Wallet = () => {



  return (
    <div id="wallet" className="sect">
      <div className="sec">

        <div className="container">
          <div className="display">
            {Data.map((wallet) => {
              return (
                <>
                  <Wallets wallet={wallet} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
