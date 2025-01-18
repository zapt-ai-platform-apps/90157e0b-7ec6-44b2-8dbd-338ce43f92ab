import React from 'react';

export default function AnalysisSection({ analysis }) {
  return (
    <div className="border p-4 rounded">
      <p className="font-semibold">
        Likely Success: {analysis.likely ? 'Yes' : 'No'}
      </p>
      <p className="mt-2">
        {analysis.explanation}
      </p>
    </div>
  );
}