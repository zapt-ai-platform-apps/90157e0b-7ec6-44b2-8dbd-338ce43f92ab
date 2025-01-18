import React from 'react';
import * as Sentry from '@sentry/browser';

export default function ParkAppealFormStep2({ formData, handleChange, handleNext, setLoading, loading }) {
  return (
    <div>
      <label className="block mb-2">
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block mb-2">
        Reason for Appeal:
        <textarea
          name="reasonForAppeal"
          value={formData.reasonForAppeal}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block mb-2">
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
        onClick={() => {
          setLoading(true);
          try {
            handleNext();
          } catch (error) {
            console.error('Submit error:', error);
            Sentry.captureException(error);
          } finally {
            setLoading(false);
          }
        }}
        className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700 transition-all duration-200"
        disabled={loading}
      >
        {loading ? 'Please wait...' : 'Submit'}
      </button>
    </div>
  );
}