import React from "react";
import Block1 from "./element/Block1";
import Block2 from "./element/Block2";
import Block3 from "./element/Block3";
import styles from "./Footer.module.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer style={{ backgroundColor: "rgb(255,255,255)" }}>
      <div className={`${styles["_footer-space"]}`}>
        <div className={`${styles["_footer-flex"]}`}>
          <Block1 />
          <Block2 />
          <Block3 />
        </div>
        <p style={{ textAlign: "center" }}>
          <small>
            Copyright &copy; 2017-{year} by The Hunter's Company SAS. All Rights
            Reserved.
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
