import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TravelGuard Insurance</h3>
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
          <p>Email: info@travelguard.com.au</p>
          <p>Mon-Fri: 8am - 6pm AEST</p>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p><strong>Disclaimer:</strong> This is a demonstration website for illustrative purposes only. TravelGuard Insurance is a fictitious company. The information provided on this website does not constitute financial advice, insurance advice, or a recommendation to purchase any insurance product. All pricing shown is indicative only and does not represent actual insurance premiums or coverage terms.</p>
        <p>Any resemblance to actual insurance products, companies, or services is purely coincidental. The coverage amounts, policy terms, and conditions described herein are fictional and should not be relied upon for making any insurance purchasing decisions. Please consult a licensed insurance professional for actual travel insurance needs.</p>
        <p>This website is provided "as is" without warranty of any kind, express or implied. TravelGuard Insurance Pty Ltd (ABN 00 000 000 000) does not accept liability for any loss or damage arising from the use of this website or reliance on the information contained herein.</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 TravelGuard Insurance Pty Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
