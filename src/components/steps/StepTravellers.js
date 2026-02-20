import React, { useState } from 'react';

function createEmptyTraveller() {
  return {
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    passport: '',
  };
}

function StepTravellers({ travellerCount, initialData, onBack, onNext }) {
  const [travellers, setTravellers] = useState(() => {
    if (initialData && initialData.length === travellerCount) {
      return initialData;
    }
    return Array.from({ length: travellerCount }, (_, i) =>
      initialData && initialData[i] ? { ...initialData[i] } : createEmptyTraveller()
    );
  });

  const [errors, setErrors] = useState({});

  const updateTraveller = (index, field, value) => {
    setTravellers((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    // Clear error for this field when user types
    if (errors[`${index}-${field}`]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[`${index}-${field}`];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    travellers.forEach((t, i) => {
      if (!t.firstName.trim()) newErrors[`${i}-firstName`] = 'Required';
      if (!t.lastName.trim()) newErrors[`${i}-lastName`] = 'Required';
      if (!t.dob) newErrors[`${i}-dob`] = 'Required';
      if (i === 0 && !t.email.trim()) newErrors[`${i}-email`] = 'Required for primary traveller';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext(travellers);
    }
  };

  const handleBack = () => {
    onBack(travellers);
  };

  return (
    <section className="quote-section">
      <div className="quote-card">
        <h2>Traveller Details</h2>

        {travellers.map((t, index) => (
          <div className="traveller-card" key={index}>
            <h3>
              Traveller {index + 1}
              {index === 0 ? ' (Primary)' : ''}
            </h3>
            <div className="traveller-form-grid">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  value={t.firstName}
                  onChange={(e) => updateTraveller(index, 'firstName', e.target.value)}
                  placeholder="First name"
                />
                {errors[`${index}-firstName`] && (
                  <span className="field-error">{errors[`${index}-firstName`]}</span>
                )}
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  value={t.lastName}
                  onChange={(e) => updateTraveller(index, 'lastName', e.target.value)}
                  placeholder="Last name"
                />
                {errors[`${index}-lastName`] && (
                  <span className="field-error">{errors[`${index}-lastName`]}</span>
                )}
              </div>
              <div className="form-group">
                <label>Date of Birth *</label>
                <input
                  type="date"
                  value={t.dob}
                  onChange={(e) => updateTraveller(index, 'dob', e.target.value)}
                />
                {errors[`${index}-dob`] && (
                  <span className="field-error">{errors[`${index}-dob`]}</span>
                )}
              </div>
              <div className="form-group">
                <label>Email{index === 0 ? ' *' : ''}</label>
                <input
                  type="email"
                  value={t.email}
                  onChange={(e) => updateTraveller(index, 'email', e.target.value)}
                  placeholder="email@example.com"
                />
                {errors[`${index}-email`] && (
                  <span className="field-error">{errors[`${index}-email`]}</span>
                )}
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={t.phone}
                  onChange={(e) => updateTraveller(index, 'phone', e.target.value)}
                  placeholder="Phone number"
                />
              </div>
              <div className="form-group">
                <label>Passport Number</label>
                <input
                  type="text"
                  value={t.passport}
                  onChange={(e) => updateTraveller(index, 'passport', e.target.value)}
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="step-navigation">
          <button className="btn-step btn-step-back" onClick={handleBack}>
            Back
          </button>
          <button className="btn-step btn-step-next" onClick={handleNext}>
            Continue to Payment
          </button>
        </div>
      </div>
    </section>
  );
}

export default StepTravellers;
