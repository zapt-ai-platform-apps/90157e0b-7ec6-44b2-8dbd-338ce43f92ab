import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import ParkAppealFormStep1 from './ParkAppealFormStep1';
import ParkAppealFormStep2 from './ParkAppealFormStep2';

export default function ParkAppealForm({ onComplete }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    issuerType: '',
    dateOfIncident: '',
    location: '',
    reasonForAppeal: '',
    evidenceFiles: []
  });

  function handleChange(e) {
    try {
      const { name, value, files } = e.target;
      if (name === 'evidenceFiles') {
        setFormData((prev) => ({
          ...prev,
          evidenceFiles: files
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
      }
    } catch (error) {
      console.error('Error in handleChange:', error);
      Sentry.captureException(error);
    }
  }

  function handleNext() {
    if (step < 2) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  }

  return (
    <div className="h-full text-gray-800">
      {step === 1 && (
        <ParkAppealFormStep1
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          loading={loading}
        />
      )}

      {step === 2 && (
        <ParkAppealFormStep2
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          setLoading={setLoading}
          loading={loading}
        />
      )}
    </div>
  );
}