import React, { useState } from 'react';
import Select from 'react-select';

const DESTINATIONS = [
  { value: 'australia', label: 'Australia' },
  { value: 'bali', label: 'Bali (Indonesia)' },
  { value: 'canada', label: 'Canada' },
  { value: 'china', label: 'China' },
  { value: 'fiji', label: 'Fiji' },
  { value: 'france', label: 'France' },
  { value: 'germany', label: 'Germany' },
  { value: 'india', label: 'India' },
  { value: 'italy', label: 'Italy' },
  { value: 'japan', label: 'Japan' },
  { value: 'new-zealand', label: 'New Zealand' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'spain', label: 'Spain' },
  { value: 'thailand', label: 'Thailand' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'usa', label: 'United States' },
  { value: 'vietnam', label: 'Vietnam' },
];

const BASE_PRICES = {
  australia: 15, bali: 22, canada: 28, china: 30, fiji: 20,
  france: 32, germany: 30, india: 25, italy: 32, japan: 35,
  'new-zealand': 18, singapore: 20, spain: 30, thailand: 22,
  uk: 32, usa: 35, vietnam: 22,
};

const selectStyles = {
  control: (base, state) => ({
    ...base,
    borderWidth: '2px',
    borderColor: state.isFocused ? '#1a7a3a' : '#e0e0e0',
    borderRadius: '10px',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(26, 122, 58, 0.12)' : 'none',
    '&:hover': { borderColor: '#1a7a3a' },
    padding: '2px',
    backgroundColor: '#fafcfa',
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: '#e8f5e9',
    borderRadius: '6px',
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: '#1a7a3a',
    fontWeight: 500,
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: '#1a7a3a',
    '&:hover': { backgroundColor: '#1a7a3a', color: '#fff' },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#1a7a3a' : state.isFocused ? '#e8f5e9' : '#fff',
    color: state.isSelected ? '#fff' : '#333',
  }),
};

function StepQuote({ initialValues, onQuoteGenerated }) {
  const [destinations, setDestinations] = useState(initialValues?.destinations || []);
  const [departDate, setDepartDate] = useState(initialValues?.departDate || '');
  const [returnDate, setReturnDate] = useState(initialValues?.returnDate || '');
  const [travellers, setTravellers] = useState(initialValues?.travellers || 1);

  const calculateQuote = (e) => {
    e.preventDefault();

    if (destinations.length === 0 || !departDate || !returnDate) return;

    const depart = new Date(departDate);
    const ret = new Date(returnDate);
    const days = Math.max(1, Math.ceil((ret - depart) / (1000 * 60 * 60 * 24)));

    const highestBase = Math.max(
      ...destinations.map((d) => BASE_PRICES[d.value] || 25)
    );
    const extraDestSurcharge = (destinations.length - 1) * 5;
    const dailyRate = highestBase + extraDestSurcharge;
    const baseTotal = dailyRate * days;

    const basicPrice = Math.round(baseTotal * travellers * 0.8);
    const standardPrice = Math.round(baseTotal * travellers);
    const premiumPrice = Math.round(baseTotal * travellers * 1.4);

    const quoteData = {
      destinations: destinations.map((d) => d.label),
      days,
      travellers: parseInt(travellers),
      basic: basicPrice,
      standard: standardPrice,
      premium: premiumPrice,
    };

    const formData = {
      destinations,
      departDate,
      returnDate,
      travellers: parseInt(travellers),
    };

    onQuoteGenerated(quoteData, formData);
  };

  return (
    <section className="quote-section">
      <div className="quote-card">
        <h2>Get Your Travel Insurance Quote</h2>
        <form onSubmit={calculateQuote}>
          <div className="form-grid">
            <div className="form-group full-width">
              <label>Destination(s)</label>
              <Select
                isMulti
                options={DESTINATIONS}
                value={destinations}
                onChange={setDestinations}
                styles={selectStyles}
                placeholder="Select one or more destinations..."
              />
            </div>
            <div className="form-group">
              <label>Departure Date</label>
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Return Date</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={departDate}
                required
              />
            </div>
            <div className="form-group">
              <label>Number of Travellers</label>
              <select
                value={travellers}
                onChange={(e) => setTravellers(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Traveller' : 'Travellers'}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>&nbsp;</label>
              <button type="submit" className="btn-quote">
                Get Quote
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default StepQuote;
