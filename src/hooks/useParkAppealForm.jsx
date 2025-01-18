import { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function useParkAppealForm(onComplete) {
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
    reasonDetails: {},
    evidenceFiles: []
  });

  function handleChange(e) {
    try {
      const { name, value, files, type, checked } = e.target;

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

      if (name === 'evidenceFiles') {
        setFormData((prev) => ({
          ...prev,
          evidenceFiles: files
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    } catch (error) {
      console.error('Error in handleChange:', error);
      Sentry.captureException(error);
    }
  }

  function handleReasonDetailChange(reason, text) {
    setFormData((prev) => ({
      ...prev,
      reasonDetails: {
        ...prev.reasonDetails,
        [reason]: text
      }
    }));
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

  return {
    step,
    loading,
    formData,
    setLoading,
    handleChange,
    handleReasonDetailChange,
    handleNext
  };
}