import React from 'react';

export default function ParkInfo({ onNext }) {
  return (
    <div className="h-full text-gray-800 space-y-4">
      <h1 className="text-2xl font-bold">Before You Appeal</h1>
      <p>
        Below is some general guidance, similar to what you'll find at Citizens Advice, on how
        to prepare for appealing a parking ticket. Please note this is not official legal advice.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Gather all evidence, including photos of signage or your vehicle if relevant.</li>
        <li>Keep a record of all correspondence with the issuer.</li>
        <li>Check the ticket's issue date and any details provided. Missing or incorrect details can be grounds for appeal.</li>
        <li>Consult official sources like <a href="https://www.citizensadvice.org.uk/law-and-courts/parking-tickets/appealing-a-parking-ticket/" target="_blank" rel="noreferrer" className="underline text-blue-600">Citizens Advice</a> for more information on valid appeal reasons.</li>
      </ul>
      <p>
        If you believe you have grounds for an appeal, proceed with this service to generate a structured letter. While we aim to provide helpful guidance, please be aware this platform is not a substitute for professional legal counsel.
      </p>
      <button
        type="button"
        onClick={onNext}
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-all duration-200"
      >
        Start Your Appeal
      </button>
    </div>
  );
}