import React from "react";

import Discord from "../img/discord.svg";
import Twitter from "../img/twitter.svg";
import Github from "../img/github.svg";

const Footer = () => {
  return (
    <div className="grouplink">
      <div className="link">
        <div className="resize">
          <img src={Discord} alt="discord" />
        </div>
        <h5><a href="https://discord.gg/jhxMvxP">Discord</a></h5>
      </div>
      <br />
      <div className="link">
        <div className="resize">
          <img src={Twitter} alt="Twitter" />
        </div>
        <h5><a href="https://twitter.com/walletconnect">Twitter</a></h5>
      </div>
      <br />
      <div className="link">
        <div className="resize">
          <img src={Github} alt="Github" />
        </div>
        <h5><a href="https://github.com/walletconnect">Github</a></h5>
      </div>
      <br />
      <div className="link">
        <div className="resize">
          <img src="https://walletconnect.org/mail.svg" alt="Support" />
        </div>
        <h5><a href="https://walletconnect.org/support">Support</a></h5>
      </div>
      <br /><br />
    </div>
  );
};

export default Footer;
