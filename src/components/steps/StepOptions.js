import React from 'react';

const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    multiplier: 'basic',
    features: [
      'Medical up to $500,000',
      'Cancellation up to $5,000',
      'Luggage up to $3,000',
      '24/7 phone support',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    multiplier: 'standard',
    recommended: true,
    features: [
      'Medical up to $2,000,000',
      'Cancellation up to $15,000',
      'Luggage up to $7,500',
      'Rental car excess',
      '24/7 phone support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    multiplier: 'premium',
    features: [
      'Unlimited medical',
      'Cancellation up to $50,000',
      'Luggage up to $15,000',
      'Rental car excess',
      'Adventure sports cover',
      '24/7 concierge',
    ],
  },
];

function StepOptions({ quoteData, selectedPlan, onSelectPlan, onBack, onNext }) {
  return (
    <section className="quote-section has-step-indicator">
      <div className="quote-card">
        <h2>Choose Your Plan</h2>

        <div className="quote-summary">
          <div className="quote-summary-item">
            <div className="summary-label">Destinations</div>
            <div className="summary-value">{quoteData.destinations.join(', ')}</div>
          </div>
          <div className="quote-summary-item">
            <div className="summary-label">Duration</div>
            <div className="summary-value">{quoteData.days} days</div>
          </div>
          <div className="quote-summary-item">
            <div className="summary-label">Travellers</div>
            <div className="summary-value">{quoteData.travellers}</div>
          </div>
        </div>

        <div className="quote-plans">
          {PLANS.map((plan) => {
            const price = quoteData[plan.multiplier];
            const isSelected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                className={`plan-card${plan.recommended ? ' recommended' : ''}${isSelected ? ' selected' : ''}`}
                onClick={() => onSelectPlan(plan.id)}
              >
                {isSelected && <span className="selected-badge">Selected</span>}
                <h4>{plan.name}</h4>
                <div className="plan-price">
                  ${price} <small>AUD</small>
                </div>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="step-navigation">
          <button className="btn-step btn-step-back" onClick={onBack}>
            Back
          </button>
          <button
            className="btn-step btn-step-next"
            onClick={onNext}
            disabled={!selectedPlan}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}

export default StepOptions;
