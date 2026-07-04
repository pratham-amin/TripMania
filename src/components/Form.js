import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [, setFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation Check
    const formData = new FormData(e.target);
    const fullName = formData.get("fullName").trim();
    const email = formData.get("email").trim();
    const contact = formData.get("contact").trim();
    const info = formData.get("info").trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactPattern = /^[0-9]{10}$/;

    if (!fullName || !emailPattern.test(email) || !contactPattern.test(contact) || !info) {
      alert("Please fill out the form correctly.");
      return;
    }

    setFormValid(true);
    alert("Form submitted successfully! ✅");

    e.target.reset(); // Clear form after submission
  };

  return (
    <form className="form" id="contact-form" onSubmit={handleSubmit}>
      <div className="inputbox">
        <h3>Your Name*</h3>
        <input type="text" required name="fullName" />
      </div>
      <div className="inputbox">
        <h3>Email Address*</h3>
        <input 
          type="email"
          className="mail"
          placeholder="abc@gmail.com"
          required
          name="email"
        />
      </div>
      <div className="inputbox">
        <h3>Contact Number*</h3>
        <input 
          type="tel" 
          maxLength="10" 
          placeholder="Number" 
          required 
          name="contact"
        />
      </div>
      <div className="inputbox">
        <h3>Description*</h3>
        <textarea placeholder="Write to us" required name="info"></textarea>
      </div>
      <div className="sub-btn">
        <button type="submit" className="subbtn">Submit</button>
      </div>
    </form>
  );
}
