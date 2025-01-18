import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import ParkAppealFormStep1 from './ParkAppealFormStep1';
import ParkAppealFormStep2 from './ParkAppealFormStep2';

export default function ParkAppealForm({ onComplete }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    userStreet: '',
    userCity: '',
    userPostcode: '',
    userEmail: '',
    userPhone: '',
    issuerName: '',
    issuerStreet: '',
    issuerCity: '',
    issuerPostcode: '',
    ticketReference: '',
    dateOfIncident: '',
    location: '',
    reasonsSelected: [],
    otherReason: '',
    evidenceFiles: []
  });

  function handleChange(e) {
    try {
      const { name, value, files, type, checked } = e.target;

      // For multiple reasons logic
      if (name === 'reasonsSelected') {
        if (checked) {
          setFormData((prev) => ({
            ...prev,
            reasonsSelected: [...prev.reasonsSelected, value]
          }));
        } else {
          setFormData((prev) => ({
            ...prev,
            reasonsSelected: prev.reasonsSelected.filter((r) => r !== value)
          }));
        }
        return;
      }

      // For evidence files
      if (name === 'evidenceFiles') {
        setFormData((prev) => ({
          ...prev,
          evidenceFiles: files
        }));
        return;
      }

      // For all other fields
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    } catch (error) {
      console.error('Error in handleChange:', error);
      Sentry.captureException(error);
    }
  }

  function handleNext() {
    console.log('Moving to the next step from step', step);
    if (step < 2) {
      setStep(step + 1);
    } else {
      console.log('Form submission complete');
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