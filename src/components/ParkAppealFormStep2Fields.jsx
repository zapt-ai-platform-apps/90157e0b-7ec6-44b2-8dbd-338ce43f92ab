import React from 'react';

export default function ParkAppealFormStep2Fields({ formData, handleChange, handleReasonDetailChange }) {
  return (
    <>
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
    </>
  );
}