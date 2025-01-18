import React from 'react';
import LetterActions from './LetterActions';

export default function LetterDraft({ letter }) {
  return (
    <div className="border p-4 mt-4 rounded whitespace-pre-line">
      <h3 className="font-bold mb-2">Draft Appeal Letter</h3>
      {letter}

      {/* Export / Share Icons */}
      <LetterActions letter={letter} />
    </div>
  );
}