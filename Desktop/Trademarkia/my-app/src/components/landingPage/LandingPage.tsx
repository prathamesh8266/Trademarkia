import React from "react";
import { Button } from "../util/Button";
import classes from "./LandingPage.module.css";
import logo from "../../images/MainLogo.svg";
import heroImage from "../../images/heroImage.svg";

export const LandingPage: React.FC<{}> = () => {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.heroTopContiner}>
        <div className={classes.topSection}>
          <div className={classes.logoHolder}>
            <img src={logo} alt="company-logo" />
          </div>
          <h1>Invoice Generator</h1>
          <div className={classes.textFieldHolder}>
            <input
              type="text"
              placeholder="Enter Name"
              className={classes.textHolder}
            ></input>
            <Button text="Generate Invoice" path="InvoiceGenerator" />
          </div>
        </div>
        <img src={heroImage} alt="Trademarkia invoice" />
      </div>
      <div className={classes.topBackgroung}></div>
      <div className={classes.bottomSection}></div>
    </div>
  );
};
