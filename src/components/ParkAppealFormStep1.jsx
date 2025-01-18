import React from 'react';

export default function ParkAppealFormStep1({ formData, handleChange, handleNext, loading }) {
  return (
    <div className="h-full text-gray-800 space-y-4">
      <label className="block">
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        Street Address:
        <input
          type="text"
          name="userStreet"
          value={formData.userStreet}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        City:
        <input
          type="text"
          name="userCity"
          value={formData.userCity}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        Postcode:
        <input
          type="text"
          name="userPostcode"
          value={formData.userPostcode}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        Email:
        <input
          type="email"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <label className="block">
        Phone Number:
        <input
          type="tel"
          name="userPhone"
          value={formData.userPhone}
          onChange={handleChange}
          className="box-border border w-full p-2 mt-1"
        />
      </label>

      <button
        onClick={handleNext}
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-all duration-200"
        disabled={loading}
      >
        {loading ? 'Please wait...' : 'Next'}
      </button>
    </div>
  );
}