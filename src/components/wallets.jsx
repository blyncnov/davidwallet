import React from "react";
import { Link } from "react-router-dom";

const Wallets = ({ wallet }) => {
  return (
    <div >
      <Link to={`/${wallet.name}`} key={wallet.id}>
        <div className="box">
          <img className="boxd" src={wallet.image} alt="icon" />
        </div>
        <p className="cent">{wallet.name}</p>
      </Link>
    </div>
  );
};

export default Wallets;
