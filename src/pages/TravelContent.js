import React from 'react';

function TravelContent() {
  return (
    <>
      <div className="page-header">
        <h1>Travel Content</h1>
        <p>Tips, guides, and resources for your next adventure</p>
      </div>
      <div className="page-content">
        <div className="content-card">
          <h2>Understanding Travel Insurance</h2>
          <p>
            Travel insurance is designed to cover unexpected events that may occur before or
            during your trip. From medical emergencies to trip cancellations, having the right
            cover gives you peace of mind while you explore the world.
          </p>
          <ul>
            <li>Medical and hospital expenses overseas</li>
            <li>Trip cancellation and interruption</li>
            <li>Lost, stolen, or damaged luggage and personal effects</li>
            <li>Travel delays and missed connections</li>
            <li>Personal liability cover</li>
          </ul>
        </div>

        <div className="content-card">
          <h2>Top Travel Tips for 2026</h2>
          <p>
            Make the most of your travels with these essential tips from our travel experts:
          </p>
          <ul>
            <li><strong>Book early:</strong> Secure the best deals on flights and accommodation by booking well in advance, especially during peak travel seasons.</li>
            <li><strong>Check visa requirements:</strong> Always verify entry requirements for your destination country before you travel to avoid last-minute surprises.</li>
            <li><strong>Pack smart:</strong> Keep essentials in your carry-on, including medications, travel documents, and a change of clothes in case of luggage delays.</li>
            <li><strong>Stay connected:</strong> Purchase a local SIM card or international roaming plan to stay connected during your trip.</li>
            <li><strong>Register with your embassy:</strong> Let your country's embassy know about your travel plans for added security.</li>
          </ul>
        </div>

        <div className="content-card">
          <h2>Popular Destinations</h2>
          <p>
            Whether you are looking for a relaxing beach getaway or an action-packed adventure,
            these destinations remain top picks for travellers:
          </p>
          <ul>
            <li><strong>Bali, Indonesia:</strong> Known for stunning temples, lush rice terraces, and vibrant culture. Ideal for both relaxation and adventure.</li>
            <li><strong>Japan:</strong> A perfect blend of ancient traditions and cutting-edge technology. Visit during cherry blossom season for an unforgettable experience.</li>
            <li><strong>New Zealand:</strong> Breathtaking landscapes, from fjords to volcanoes. A paradise for outdoor enthusiasts and nature lovers.</li>
            <li><strong>Italy:</strong> Rich history, world-class cuisine, and iconic landmarks. From Rome to the Amalfi Coast, every region offers something unique.</li>
            <li><strong>Thailand:</strong> Affordable luxury, incredible street food, and pristine islands. A favourite for travellers of all budgets.</li>
          </ul>
        </div>

        <div className="content-card">
          <h2>What to Do If Something Goes Wrong</h2>
          <p>
            Even with the best planning, things can go wrong. Here is how to handle common
            travel emergencies:
          </p>
          <ul>
            <li><strong>Medical emergency:</strong> Call local emergency services first, then contact our 24/7 assistance line. Keep your policy number handy at all times.</li>
            <li><strong>Lost passport:</strong> Report to local police and contact your country's nearest embassy or consulate immediately.</li>
            <li><strong>Flight cancellation:</strong> Contact your airline first for rebooking options. Keep all receipts for additional expenses and contact us to lodge a claim.</li>
            <li><strong>Stolen belongings:</strong> File a police report within 24 hours and keep a copy. Contact us to start the claims process.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TravelContent;
