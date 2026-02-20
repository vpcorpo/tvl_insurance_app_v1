import React, { useState, useEffect } from 'react';
import StepIndicator from '../components/StepIndicator';
import StepQuote from '../components/steps/StepQuote';
import StepOptions from '../components/steps/StepOptions';
import StepTravellers from '../components/steps/StepTravellers';
import StepPayment from '../components/steps/StepPayment';

function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteData, setQuoteData] = useState(null);
  const [quoteFormData, setQuoteFormData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [travellerDetails, setTravellerDetails] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleQuoteGenerated = (quote, formData) => {
    setQuoteData(quote);
    setQuoteFormData(formData);
    setCurrentStep(2);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setQuoteData(null);
    setQuoteFormData(null);
    setSelectedPlan(null);
    setTravellerDetails(null);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepQuote
            initialValues={quoteFormData}
            onQuoteGenerated={handleQuoteGenerated}
          />
        );
      case 2:
        return (
          <StepOptions
            quoteData={quoteData}
            selectedPlan={selectedPlan}
            onSelectPlan={setSelectedPlan}
            onBack={() => setCurrentStep(1)}
            onNext={() => setCurrentStep(3)}
          />
        );
      case 3:
        return (
          <StepTravellers
            travellerCount={quoteData.travellers}
            initialData={travellerDetails}
            onBack={(data) => {
              setTravellerDetails(data);
              setCurrentStep(2);
            }}
            onNext={(data) => {
              setTravellerDetails(data);
              setCurrentStep(4);
            }}
          />
        );
      case 4:
        return (
          <StepPayment
            quoteData={quoteData}
            selectedPlan={selectedPlan}
            onBack={() => setCurrentStep(3)}
            onReset={handleReset}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className="hero">
        <h1>Travel With Confidence</h1>
        <p>
          Comprehensive travel insurance to protect you and your loved ones on every journey.
          Get an instant quote in seconds.
        </p>
      </section>

      {currentStep > 1 && (
        <div style={{ paddingTop: '2rem' }}>
          <StepIndicator currentStep={currentStep} />
        </div>
      )}

      <div className="step-container" key={currentStep}>
        {renderStep()}
      </div>

      {currentStep === 1 && (
        <section className="features-section">
          <h2>Why Choose Travel Insurance Corp?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">&#127758;</div>
              <h3>Worldwide Coverage</h3>
              <p>
                Travel to any destination with confidence. Our policies cover you in over 180
                countries across the globe.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#9889;</div>
              <h3>Instant Claims</h3>
              <p>
                Our streamlined claims process means you get reimbursed faster. Submit claims
                online anytime, anywhere.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#128222;</div>
              <h3>24/7 Support</h3>
              <p>
                Our emergency assistance team is available around the clock. Help is just a
                phone call away, no matter your timezone.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
