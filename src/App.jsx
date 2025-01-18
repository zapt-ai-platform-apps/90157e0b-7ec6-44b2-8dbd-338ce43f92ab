import React, { useState } from 'react';
import ParkInfo from './components/ParkInfo';
import ParkAppealForm from './components/ParkAppealForm';
import ParkFinalize from './components/ParkFinalize';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [finishedData, setFinishedData] = useState(null);

  function handleStart() {
    console.log('User clicked Start Your Appeal');
    setShowForm(true);
  }

  function handleFormComplete(data) {
    console.log('Form data complete:', data);
    setFinishedData(data);
  }

  return (
    <div className="min-h-screen text-gray-800 relative p-4">
      <div className="h-full max-w-3xl mx-auto">
        {!showForm && !finishedData && (
          <ParkInfo onNext={handleStart} />
        )}

        {showForm && !finishedData && (
          <ParkAppealForm onComplete={handleFormComplete} />
        )}

        {finishedData && (
          <ParkFinalize formData={finishedData} />
        )}
      </div>
      <div className="mt-8">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-600"
        >
          Made on ZAPT
        </a>
      </div>
    </div>
  );
}