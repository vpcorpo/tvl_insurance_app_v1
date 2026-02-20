import React from 'react';

function EmergencyAssistance() {
  return (
    <>
      <div className="emergency-banner">
        For life-threatening emergencies, always call local emergency services (000, 911, 112) first
      </div>
      <div className="page-header">
        <h1>Emergency Assistance</h1>
        <p>24/7 support when you need it most</p>
      </div>
      <div className="page-content">
        <div className="content-card" style={{ textAlign: 'center', borderLeft: '4px solid #d32f2f' }}>
          <h2 style={{ color: '#d32f2f' }}>24/7 Emergency Hotline</h2>
          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1a7a3a', margin: '1rem 0' }}>
            +61 2 9876 0000
          </div>
          <p>Available 24 hours a day, 7 days a week, 365 days a year</p>
          <p style={{ marginTop: '0.5rem', color: '#777' }}>
            Have your policy number ready when you call
          </p>
        </div>

        <div className="emergency-grid">
          <div className="emergency-card">
            <h3>Medical Emergency</h3>
            <p>
              If you require urgent medical attention while overseas, contact local emergency
              services immediately, then call our emergency hotline. We will coordinate with
              local hospitals and arrange payment guarantees where possible.
            </p>
          </div>
          <div className="emergency-card">
            <h3>Hospital Admission</h3>
            <p>
              For planned or emergency hospital admissions, contact us as soon as possible. We
              can arrange direct billing with partner hospitals, reducing your out-of-pocket
              expenses during a stressful time.
            </p>
          </div>
          <div className="emergency-card">
            <h3>Medical Evacuation</h3>
            <p>
              In serious cases where local medical facilities cannot provide adequate treatment,
              we will arrange and cover medical evacuation to the nearest appropriate facility
              or back to your home country.
            </p>
          </div>
          <div className="emergency-card">
            <h3>Lost or Stolen Documents</h3>
            <p>
              If your passport, travel documents, or credit cards are lost or stolen, we can
              help you contact the relevant authorities and assist with emergency replacement
              documents and funds.
            </p>
          </div>
          <div className="emergency-card">
            <h3>Legal Assistance</h3>
            <p>
              If you encounter legal difficulties abroad, we can provide referrals to local
              legal representatives and coordinate with your embassy to ensure you receive
              appropriate support.
            </p>
          </div>
          <div className="emergency-card">
            <h3>Travel Disruption</h3>
            <p>
              For major travel disruptions such as natural disasters, civil unrest, or
              widespread flight cancellations, contact our team for assistance with rebooking,
              accommodation, and alternative travel arrangements.
            </p>
          </div>
        </div>

        <div className="content-card">
          <h2>Before You Travel</h2>
          <p>Be prepared for emergencies by following these steps before you depart:</p>
          <ul>
            <li>Save our emergency hotline number in your phone contacts</li>
            <li>Download a copy of your policy documents to your phone</li>
            <li>Note your policy number and keep it accessible</li>
            <li>Share your travel itinerary and policy details with a trusted contact at home</li>
            <li>Check the Smartraveller website for travel advisories for your destinations</li>
            <li>Ensure you have adequate travel insurance coverage for your planned activities</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default EmergencyAssistance;
