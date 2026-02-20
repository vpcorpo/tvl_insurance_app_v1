import React from 'react';

const STEP_LABELS = ['Quote', 'Options', 'Travellers', 'Payment'];

function StepIndicator({ currentStep }) {
  return (
    <div className="step-indicator">
      {STEP_LABELS.map((label, index) => {
        const stepNum = index + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <React.Fragment key={stepNum}>
            <div className="step-item-wrapper">
              <div
                className={`step-circle${isCompleted ? ' completed' : ''}${isActive ? ' active' : ''}`}
              >
                {isCompleted ? '\u2713' : stepNum}
              </div>
              <div
                className={`step-label${isCompleted ? ' completed' : ''}${isActive ? ' active' : ''}`}
              >
                {label}
              </div>
            </div>
            {index < STEP_LABELS.length - 1 && (
              <div
                className={`step-connector${stepNum < currentStep ? ' completed' : ''}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default StepIndicator;
