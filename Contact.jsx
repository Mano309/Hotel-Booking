import React, { useState } from "react";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Contact Us</h2>
      <p className="text-center">Get in touch with us for inquiries, bookings, or assistance.</p>

      <div className="row mt-4">
        {/* Contact Information */}
        <div className="col-md-6">
          <h4>Our Address</h4>
          <p>123 Luxury Hotel, Main Street, City, Country</p>

          <h4>Phone</h4>
          <p>📞 +123 456 7890</p>

          <h4>Email</h4>
          <p>📧 contact@luxuryhotel.com</p>

          <h4>Follow Us</h4>
          <p>
            <a href="#" className="me-3">Facebook</a> | 
            <a href="#" className="ms-3">Instagram</a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <h4>Send Us a Message</h4>
          {submitted ? (
            <div className="alert alert-success">Thank you! We will get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="form-control mb-2" 
                required 
              />

              <label>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="form-control mb-2" 
                required 
              />

              <label>Message:</label>
              <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="form-control mb-2" 
                rows="4" 
                required 
              ></textarea>

              <button type="submit" className="btn btn-primary mt-2">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;

