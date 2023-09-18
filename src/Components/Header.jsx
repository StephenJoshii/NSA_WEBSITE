import React from "react";
import Navbar from "./Navbar"


export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Nepalese Student Association</h1>
        {<Navbar />}
      </div>
    </header>
  );
};
