import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Travel Insurance Corp</h3>
          <p>Protecting travellers worldwide with comprehensive travel insurance solutions since 2005.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/travel-content">Travel Content</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/emergency-assistance">Emergency Assistance</Link>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Phone: 1800 123 456</p>
          <p>Email: info@travelinsurancecorp.com.au</p>
          <p>Mon-Fri: 8am - 6pm AEST</p>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p><strong>Disclaimer:</strong> This is a demonstration website for illustrative purposes only. Travel Insurance Corp is a fictitious company. The information provided on this website does not constitute financial advice, insurance advice, or a recommendation to purchase any insurance product. All pricing shown is indicative only and does not represent actual insurance premiums or coverage terms.</p>
        <p>Any resemblance to actual insurance products, companies, or services is purely coincidental. The coverage amounts, policy terms, and conditions described herein are fictional and should not be relied upon for making any insurance purchasing decisions. Please consult a licensed insurance professional for actual travel insurance needs.</p>
        <p>This website is provided "as is" without warranty of any kind, express or implied. Travel Insurance Corp Pty Ltd (ABN 00 000 000 000) does not accept liability for any loss or damage arising from the use of this website or reliance on the information contained herein.</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Travel Insurance Corp Pty Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
