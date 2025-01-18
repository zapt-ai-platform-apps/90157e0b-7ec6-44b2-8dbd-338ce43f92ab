import React from 'react';
import * as Sentry from '@sentry/browser';
import ReasonsCheckboxGroup from './ReasonsCheckboxGroup';
import ParkAppealFormStep2Fields from './ParkAppealFormStep2Fields';

export default function ParkAppealFormStep2({
  formData,
  handleChange,
  handleNext,
  setLoading,
  loading,
  handleReasonDetailChange
}) {
  const handleSubmit = () => {
    setLoading(true);
    try {
      console.log('Final step: submitting appeal form');
      handleNext();
    } catch (error) {
      console.error('Submit error:', error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full text-gray-800 space-y-4">
      <ParkAppealFormStep2Fields formData={formData} handleChange={handleChange} handleReasonDetailChange={handleReasonDetailChange} />
      <p className="text-sm text-gray-600">
        Feel free to provide additional context for each selected reason so we can include it in your final appeal letter.
      </p>
      <ReasonsCheckboxGroup
        reasonsSelected={formData.reasonsSelected}
        reasonDetails={formData.reasonDetails}
        handleToggleReason={handleChange}
        handleReasonDetailChange={handleReasonDetailChange}
      />
      <button
        onClick={handleSubmit}
        className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700 transition-all duration-200"
        disabled={loading}
      >
        {loading ? 'Please wait...' : 'Submit'}
      </button>
    </div>
  );
}