import { Button } from "../util/Button";
import React from "react";
import logo from "../../images/MainLogo.svg";
import pen from "../../images/pen.svg";
import eye from "../../images/eye.svg";
import classes from "./InvoiceGenerator.module.css";
import { InvoiceGeneratorBody } from "../InvoiceGeneratorBody/InvoiceGeneratorBody";

export const InvoiceGenerator: React.FC<{}> = () => {
  return (
    <div className={classes.invloceGenerator}>
      <header>
        <img src={logo} alt="company-logo" />
        <h2>Invoice Generator</h2>
      </header>
      <div></div>
      <div className={classes.topButtons}>
        <p>
          Invoice
          <img src={pen} alt="pen" className={classes.Image} />
        </p>
        <div className={classes.displayOptions}>
          <p>
            <img src={eye} alt="preview" className={classes.Image} />
            Preview
          </p>
          <p>
            <img src={pen} alt="edit" className={classes.Image} />
            Edit
          </p>
        </div>
        <div className={classes.topButtonHolder}>
          <Button text="Export as PDF" path="" />
          <Button text="Save Invoice" path="" />
        </div>
      </div>
      <hr className={classes.horisontalLine} />
      <InvoiceGeneratorBody />
    </div>
  );
};
