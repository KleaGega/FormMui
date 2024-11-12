import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { useFormContext } from './useFormContext';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { inputFields, handleChange, handleNext, handlePrev } = useFormContext();

  const handleNextStep = () => {
    if (currentStep < 3) {
      handleNext(`/step${currentStep + 1}`);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      handlePrev(`/step${currentStep - 1}`);
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      {currentStep === 1 && (
        <Step1
          inputFields={inputFields}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
        />
      )}
      {currentStep === 2 && (
        <Step2
          inputFields={inputFields}
          handleChange={handleChange}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}
    </>
  );
};

export default MultiStepForm;
