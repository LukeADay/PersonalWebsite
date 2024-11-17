import React, { useState } from 'react';
import './Contact.css';
import { FaCoffee } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Send the form data using EmailJS
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Your EmailJS service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Your EmailJS template ID
        e.target, // This passes the form data to EmailJS
        process.env.REACT_APP_EMAILJS_USER_ID // Your public user ID from EmailJS
      );

      console.log('Email sent successfully:', result);
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send the email.');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      {status && <p>{status}</p>}
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
