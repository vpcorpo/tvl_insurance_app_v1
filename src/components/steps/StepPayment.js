import React, { useState } from 'react';

const PLAN_NAMES = { basic: 'Basic', standard: 'Standard', premium: 'Premium' };

function generatePolicyNumber() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'TG-';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function StepPayment({ quoteData, selectedPlan, onBack, onReset }) {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [policyNumber, setPolicyNumber] = useState('');

  const price = quoteData[selectedPlan];
  const planName = PLAN_NAMES[selectedPlan];

  const isFormValid = cardHolder.trim() && cardNumber.trim() && expiry.trim() && cvv.trim() && termsAgreed;

  const handleConfirm = () => {
    if (!isFormValid) return;
    setPolicyNumber(generatePolicyNumber());
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <section className="quote-section has-step-indicator">
        <div className="quote-card">
          <div className="confirmation-view">
            <div className="confirmation-icon">{'\u2713'}</div>
            <h2>Booking Confirmed!</h2>
            <p className="confirmation-subtitle">
              Your travel insurance policy has been created successfully.
            </p>

            <div className="confirmation-details">
              <div className="detail-row">
                <span className="detail-label">Policy Number</span>
                <span className="detail-value">{policyNumber}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Plan</span>
                <span className="detail-value">{planName}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Destinations</span>
                <span className="detail-value">{quoteData.destinations.join(', ')}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Duration</span>
                <span className="detail-value">{quoteData.days} days</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Travellers</span>
                <span className="detail-value">{quoteData.travellers}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Total Paid</span>
                <span className="detail-value">${price} AUD</span>
              </div>
            </div>

            <button className="btn-new-quote" onClick={onReset}>
              Get Another Quote
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="quote-section has-step-indicator">
      <div className="quote-card">
        <h2>Payment</h2>

        <div className="payment-layout">
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="order-summary-row">
              <span className="row-label">Plan</span>
              <span className="row-value">{planName}</span>
            </div>
            <div className="order-summary-row">
              <span className="row-label">Destinations</span>
              <span className="row-value">{quoteData.destinations.join(', ')}</span>
            </div>
            <div className="order-summary-row">
              <span className="row-label">Duration</span>
              <span className="row-value">{quoteData.days} days</span>
            </div>
            <div className="order-summary-row">
              <span className="row-label">Travellers</span>
              <span className="row-value">{quoteData.travellers}</span>
            </div>
            <div className="order-summary-total">
              <span className="row-label">Total</span>
              <span className="row-value">${price} AUD</span>
            </div>
          </div>

          <div className="payment-form-section">
            <h3>Card Details</h3>
            <div className="payment-form-grid">
              <div className="form-group full-width">
                <label>Card Holder Name</label>
                <input
                  type="text"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  placeholder="Name on card"
                />
              </div>
              <div className="form-group full-width">
                <label>Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>
              <div className="form-group">
                <label>Expiry Date</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  maxLength={5}
                />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                  maxLength={4}
                />
              </div>
            </div>

            <div className="terms-checkbox">
              <input
                type="checkbox"
                id="terms"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
              />
              <label htmlFor="terms">
                I agree to the Terms and Conditions, Privacy Policy, and Product Disclosure Statement.
                I understand this is a demo application and no real payment will be processed.
              </label>
            </div>

            <button
              className="btn-confirm"
              onClick={handleConfirm}
              disabled={!isFormValid}
            >
              Confirm & Pay ${price} AUD
            </button>
          </div>
        </div>

        <div className="step-navigation">
          <button className="btn-step btn-step-back" onClick={onBack}>
            Back
          </button>
          <span />
        </div>
      </div>
    </section>
  );
}

export default StepPayment;
