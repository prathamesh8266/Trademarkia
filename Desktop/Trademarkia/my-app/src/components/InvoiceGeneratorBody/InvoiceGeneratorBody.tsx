import React from "react";
import classes from "./InvoiceGeneratorBody.module.css";
import logo from "../../images/MainLogo.svg";

export const InvoiceGeneratorBody: React.FC<{}> = () => {
  var today = new Date();
  var data = {};
  var date =
    today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      data = json;
      console.log(data);
      //   console.log(data);
      //   Object.entries(data).map((d) => {
      //     // console.log(d);
      //     d.map((e) => console.log(e));
      //   });
    });

  return (
    <div className={classes.invoiceHolder}>
      <div className={classes.invoiceHead}>
        <div>
          <div className={classes.companyLogo}>
            <img src={logo} alt="company-logo" />
            <h2>Invoice Generator</h2>
          </div>
        </div>
        <p>
          LegalForce RAPC Worldwide +1 877-794-9511 1580 West El Camino Real,
          Suite 10 Mountain View, California 94040 - 2479 United States
        </p>
      </div>
      <div className={classes.details}>
        <div className={classes.leftDetails}>
          <input
            type="text"
            placeholder="Enter Trancsaction Name"
            className={classes.datailsInput}
          />
          <p>Paid on {date}</p>
        </div>
        <div className={classes.rightDetails}>
          <h3>Amount Paid</h3>
          <p>$0.00</p>
        </div>
      </div>
      <div className={classes.descriptionBody}>
        <p className={classes.description}>Description</p>
        <p className={classes.rate}>Rate</p>
        <p className={classes.quantity}>Quantity</p>
        <p className={classes.total}>Line Total</p>
        <p className={classes.rateHolder}>$120</p>
        <p className={classes.quantiytHolder}></p>
        <input type="text" className={classes.inputTest} />
        {/* <input
          for="data"
          className={classes.inputTest}
          placeholder="choose a product"
        /> */}
        {/* <select name="data">
          {Object.entries(data).map((d) => (
            <option value={d.catagory}/>
          ))}
        </select> */}
        <input type="number" className={classes.inputNUmber} />
        <p className={classes.totalHolder}>$400</p>
      </div>
    </div>
  );
};
