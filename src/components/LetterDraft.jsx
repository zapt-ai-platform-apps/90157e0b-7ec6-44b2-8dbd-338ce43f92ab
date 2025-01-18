import React from 'react';
import * as Sentry from '@sentry/browser';
import { FaFileWord, FaFilePdf, FaPrint, FaEnvelope } from 'react-icons/fa';

export default function LetterDraft({ letter }) {
  function handleExportDoc() {
    console.log('Exporting letter as DOC...');
    // TODO: Add logic to convert and download as .doc or .docx
  }

  function handleExportPdf() {
    console.log('Exporting letter as PDF...');
    // TODO: Add logic to generate and download PDF
  }

  function handlePrint() {
    console.log('Printing letter...');
    window.print();
  }

  function handleEmail() {
    console.log('Emailing letter...');
    // You could open a mailto link or integrate an email API
  }

  return (
    <div className="border p-4 mt-4 rounded whitespace-pre-line">
      <h3 className="font-bold mb-2">Draft Appeal Letter</h3>
      {letter}

      {/* Export / Share Icons */}
      <div className="flex space-x-4 mt-4">
        <span onClick={handleExportDoc} title="Save as MS Word doc">
          <FaFileWord className="cursor-pointer hover:text-blue-700" />
        </span>
        <span onClick={handleExportPdf} title="Save as PDF">
          <FaFilePdf className="cursor-pointer hover:text-red-600" />
        </span>
        <span onClick={handlePrint} title="Print letter">
          <FaPrint className="cursor-pointer hover:text-gray-700" />
        </span>
        <span onClick={handleEmail} title="Email letter">
          <FaEnvelope className="cursor-pointer hover:text-blue-500" />
        </span>
      </div>
    </div>
  );
}