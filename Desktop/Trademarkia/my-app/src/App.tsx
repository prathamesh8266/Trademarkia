import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/landingPage/LandingPage";
import { InvoiceGenerator } from "./components/invoiceGenerator/InvoiceGenerator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/InvoiceGenerator" element={<InvoiceGenerator />} />
      </Routes>
    </div>
  );
}

export default App;
