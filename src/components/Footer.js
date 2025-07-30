import React from "react";
import { ReactComponent as GitHubLogo } from "../svg/github.svg";

const Footer = () => {
  return (
    <div className="footer">
      <a
        className="footer-effect text-inherit flex justify-center items-center tracking-tighter gap-2"
        href="https://github.com/ss-dev17"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubLogo
          style={{
            height: "1.2rem",
            width: "1.2rem",
            color: "white",
            fill: "inherit",
          }}
        />
        Created by ss-dev17
      </a>
    </div>
  );
};

export default Footer;
