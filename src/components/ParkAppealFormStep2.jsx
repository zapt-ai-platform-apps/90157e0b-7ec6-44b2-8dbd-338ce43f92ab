import React from 'react';
import * as Sentry from '@sentry/browser';
import ReasonsCheckboxGroup from './ReasonsCheckboxGroup';

export default function ParkAppealFormStep2({ formData, handleChange, handleNext, setLoading, loading }) {
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

  const handleOtherChange = (e) => {
    handleChange(e);
  };

  return (
    <div className="h-full text-gray-800 space-y-4">
      <label className="block">
        Issuer Name:
        <input
          type="text"
          name="issuerName"
          value={formData.issuerName}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        Issuer Street:
        <input
          type="text"
          name="issuerStreet"
          value={formData.issuerStreet}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        Issuer City:
        <input
          type="text"
          name="issuerCity"
          value={formData.issuerCity}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        Issuer Postcode:
        <input
          type="text"
          name="issuerPostcode"
          value={formData.issuerPostcode}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        Ticket Reference:
        <input
          type="text"
          name="ticketReference"
          value={formData.ticketReference}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        Date Ticket Issued:
        <input
          type="date"
          name="dateOfIncident"
          value={formData.dateOfIncident}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <ReasonsCheckboxGroup
        reasonsSelected={formData.reasonsSelected}
        handleChange={handleChange}
        otherReason={formData.otherReason}
        handleOtherChange={handleOtherChange}
      />

      <label className="block">
        Upload Evidence (photos, etc.):
        <input
          type="file"
          name="evidenceFiles"
          multiple
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

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