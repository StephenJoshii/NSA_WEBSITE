import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <div className="contact">
      <Header/>
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          You can reach us at <a href="mailto:contact@example.com">contact@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Contact;
