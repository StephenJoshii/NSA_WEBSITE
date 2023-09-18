import React from "react";
import Header from "./Header";


const Home = () => {
  return (
    <div className="home">
      <Header/>
      <div className="home-page">

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          The Nepalese Student Association is a community of Nepalese students
          studying in various universities and colleges worldwide. Our mission
          is to promote Nepali culture, foster connections among Nepali students,
          and provide support for academic and cultural endeavors.
        </p>
      </section>

      <section className="events-section">
        <h2>Upcoming Events</h2>
        <ul>
          <li>
            <strong>Annual Cultural Festival</strong> - Join us for a
            celebration of Nepali culture, featuring music, dance, food, and more.
          </li>
          <li>
            <strong>Academic Workshops</strong> - Enhance your academic skills
            with workshops on various subjects led by experts in the field.
          </li>
          <li>
            <strong>Community Service</strong> - Get involved in our
            community-focused projects and make a positive impact on society.
          </li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, suggestions, or would like to join our
          association, please don't hesitate to reach out to us.
        </p>
        <p>
          Email: <a href="mailto:info@nepalesestudentassociation.org">info@nepalesestudentassociation.org</a>
        </p>
      </section>
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Nepalese Student Association</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
