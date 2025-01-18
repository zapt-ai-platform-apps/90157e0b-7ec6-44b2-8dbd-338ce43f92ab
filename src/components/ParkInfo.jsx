import React from 'react';

export default function ParkInfo({ onNext }) {
  return (
    <div className="h-full text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Understanding UK Parking Fines</h1>
      <p className="mb-4">
        In the UK, Penalty Charge Notices (PCNs) are usually issued by local councils for
        contraventions on public roads or council car parks. Private companies issue parking
        tickets on privately-owned land. While PCNs are backed by law under the Traffic
        Management Act, private tickets are considered contractual notices.
      </p>
      <p className="mb-4">
        Always check signage, evidence photos, and your parking ticket details. For more guidance,
        visit <a href="https://www.citizensadvice.org.uk" target="_blank" className="underline text-blue-600">Citizens Advice</a>.
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