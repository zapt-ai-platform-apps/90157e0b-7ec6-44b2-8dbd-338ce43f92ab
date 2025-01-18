import React, { useState } from 'react';
import { evaluateAppeal, generateAppealLetter } from '../utils/appealLogic';
import * as Sentry from '@sentry/browser';

export default function ParkFinalize({ formData }) {
  const [analysis, setAnalysis] = useState(null);
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);

  function handleAnalysis() {
    setLoading(true);
    try {
      const result = evaluateAppeal(formData);
      setAnalysis(result);
    } catch (error) {
      console.error('Error evaluating appeal:', error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  }

  function handleLetter() {
    try {
      const draft = generateAppealLetter(formData);
      setLetter(draft);
    } catch (error) {
      console.error('Error generating letter:', error);
      Sentry.captureException(error);
    }
  }

  return (
    <div className="h-full text-gray-800 space-y-4">
      {analysis ? (
        <div className="border p-4 rounded">
          <p className="font-semibold">
            Likely Success: {analysis.likely ? 'Yes' : 'No'}
          </p>
          <p>{analysis.message}</p>
        </div>
      ) : (
        <button
          onClick={handleAnalysis}
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-200"
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Check Appeal'}
        </button>
      )}

      {analysis && (
        <div>
          <button
            onClick={handleLetter}
            className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-200"
          >
            Generate Letter
          </button>
        </div>
      )}

      {letter && (
        <div className="border p-4 mt-4 rounded whitespace-pre-line">
          <h3 className="font-bold mb-2">Draft Appeal Letter</h3>
          {letter}
        </div>
      )}
    </div>
  );
}