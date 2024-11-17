import React from 'react';
import './Contact.css';
import { FaCoffee } from 'react-icons/fa'; // For the coffee icon

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="buy-me-coffee">
        <p>If you like my work and want to support me, consider buying me a coffee!</p>
        <a
          href="https://www.buymeacoffee.com/LukeADay"
          target="_blank"
          rel="noopener noreferrer"
          className="coffee-button"
        >
          <FaCoffee size={20} style={{ marginRight: '8px' }} />
          Buy Me a Coffee
        </a>
      </div>
    </section>
  );
}

export default Contact;
