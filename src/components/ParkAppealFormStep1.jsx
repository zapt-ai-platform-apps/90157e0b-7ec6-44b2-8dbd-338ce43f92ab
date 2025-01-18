import React from 'react';

export default function ParkAppealFormStep1({ formData, handleChange, handleNext, loading }) {
  return (
    <div>
      <label className="block mb-2">
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block mb-2">
        Issuer Type:
        <select
          name="issuerType"
          onChange={handleChange}
          value={formData.issuerType}
          className="box-border border w-full p-2 mt-1"
        >
          <option value="">Select issuer</option>
          <option value="council">Council (PCN)</option>
          <option value="private">Private Operator</option>
        </select>
      </label>

      <label className="block mb-2">
        Date of Incident:
        <input
          type="date"
          name="dateOfIncident"
          value={formData.dateOfIncident}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <button
        onClick={handleNext}
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-all duration-200"
        disabled={loading}
      >
        Next
      </button>
    </div>
  );
}