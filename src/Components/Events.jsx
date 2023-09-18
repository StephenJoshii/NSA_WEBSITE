import React from "react";
import Header from "./Header";

const Events = () => {
  return (
    <div className="events">
      <Header/>
      <div className="container">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Event 1 - Date</li>
          <li>Event 2 - Date</li>
          <li>Event 3 - Date</li>
        </ul>
      </div>
    </div>
  );
};

export default Events;
