import React from 'react';
import ParkAppealFormStep1 from './ParkAppealFormStep1';
import ParkAppealFormStep2 from './ParkAppealFormStep2';
import useParkAppealForm from '../hooks/useParkAppealForm';

export default function ParkAppealForm({ onComplete }) {
  const {
    step,
    loading,
    formData,
    setLoading,
    handleChange,
    handleReasonDetailChange,
    handleNext
  } = useParkAppealForm(onComplete);

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
          handleReasonDetailChange={handleReasonDetailChange}
        />
      )}
    </div>
  );
}