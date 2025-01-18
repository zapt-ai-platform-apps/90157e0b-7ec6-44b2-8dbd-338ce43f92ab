import React from 'react';
import { commonReasons } from '../constants/commonReasons';

export default function ReasonsCheckboxGroup({ reasonsSelected, handleChange, otherReason, handleOtherChange }) {
  return (
    <div className="mb-2">
      <p className="font-semibold">Reasons for Appeal (Select all that apply):</p>
      {commonReasons.map((reason) => (
        <label key={reason} className="block">
          <input
            type="checkbox"
            name="reasonsSelected"
            value={reason}
            checked={reasonsSelected.includes(reason)}
            onChange={handleChange}
            className="mr-2"
          />
          {reason}
        </label>
      ))}
      <label className="block mt-2">
        <input
          type="checkbox"
          name="reasonsSelected"
          value="Other"
          checked={reasonsSelected.includes('Other')}
          onChange={handleChange}
          className="mr-2"
        />
        Other (please specify):
      </label>
      {reasonsSelected.includes('Other') && (
        <textarea
          name="otherReason"
          value={otherReason}
          onChange={handleOtherChange}
          className="box-border border w-full p-2 mt-1"
          placeholder="Describe your reason..."
        />
      )}
    </div>
  );
}