import React from 'react';
import { commonReasons } from '../constants/commonReasons';

export default function ReasonsCheckboxGroup({
  reasonsSelected,
  reasonDetails,
  handleToggleReason,
  handleReasonDetailChange
}) {
  return (
    <div className="mb-2">
      <p className="font-semibold">Reasons for Appeal (Select all that apply):</p>
      {commonReasons.map(reason => (
        <div key={reason} className="mb-2">
          <label className="block">
            <input
              type="checkbox"
              name="reasonsSelected"
              value={reason}
              checked={reasonsSelected.includes(reason)}
              onChange={handleToggleReason}
              className="mr-2"
            />
            {reason}
          </label>
          {reasonsSelected.includes(reason) && (
            <textarea
              name={`reasonDetail_${reason}`}
              value={reasonDetails[reason] || ''}
              onChange={(e) => handleReasonDetailChange(reason, e.target.value)}
              className="box-border border w-full p-2 mt-1"
              placeholder="Add more detail here..."
            />
          )}
        </div>
      ))}
    </div>
  );
}