import React from "react";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";

export const Button: React.FC<{ text: string; path: string }> = ({
  text,
  path,
}) => {
  var redirect: string = "";
  if (path == "/InvoiceGenerator") {
    redirect = "/InvoiceGenerator";
  }
  if (path == "") return <button className={classes.btn}>{text}</button>;
  else {
    return (
      <div>
        <Link to={path}>
          <button className={classes.btn}>{text}</button>
        </Link>
      </div>
    );
  }
};
