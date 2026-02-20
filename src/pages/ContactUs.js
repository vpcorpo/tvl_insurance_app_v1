import React, { useState } from 'react';

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We are here to help with any questions about your travel insurance</p>
      </div>
      <div className="page-content">
        <div className="contact-grid">
          <div className="content-card">
            <h2>Send Us a Message</h2>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#9989;</div>
                <h3 style={{ color: '#1a7a3a', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: '#555' }}>
                  Thank you for reaching out. We will get back to you within 1-2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-quote"
                  style={{ marginTop: '1rem', display: 'inline-block' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your message..." required />
                <button type="submit" className="btn-quote">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="content-card">
            <h2>Get in Touch</h2>
            <div className="contact-info-item">
              <span className="contact-info-icon">&#128222;</span>
              <div>
                <h3>Phone</h3>
                <p>1800 123 456 (toll-free)</p>
                <p>+61 2 9876 5432 (international)</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">&#9993;</span>
              <div>
                <h3>Email</h3>
                <p>info@travelinsurancecorp.com.au</p>
                <p>claims@travelinsurancecorp.com.au</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">&#128205;</span>
              <div>
                <h3>Office</h3>
                <p>Level 10, 123 George Street</p>
                <p>Sydney NSW 2000, Australia</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">&#128336;</span>
              <div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 8:00am - 6:00pm AEST</p>
                <p>Saturday: 9:00am - 1:00pm AEST</p>
                <p>Sunday & Public Holidays: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
