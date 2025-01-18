import React from 'react';
import * as Sentry from '@sentry/browser';
import { FaFileWord, FaFilePdf, FaPrint, FaEnvelope } from 'react-icons/fa';

export default function LetterActions({ letter }) {
  function handleExportDoc() {
    try {
      const fileName = "appeal_letter.doc";
      const blob = new Blob([letter], { type: "application/msword" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      console.log('Letter exported as DOC.');
    } catch (error) {
      console.error('Error exporting as DOC:', error);
      Sentry.captureException(error);
    }
  }

  function handleExportPdf() {
    try {
      const fileName = "appeal_letter.pdf";
      const blob = new Blob([letter], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      console.log('Letter exported as PDF.');
    } catch (error) {
      console.error('Error exporting as PDF:', error);
      Sentry.captureException(error);
    }
  }

  function handlePrint() {
    try {
      console.log('Printing letter...');
      window.print();
    } catch (error) {
      console.error('Error printing letter:', error);
      Sentry.captureException(error);
    }
  }

  function handleEmail() {
    try {
      const subject = "Parking Appeal Letter";
      const body = encodeURIComponent(letter);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
      console.log('Email client opened for letter.');
    } catch (error) {
      console.error('Error emailing letter:', error);
      Sentry.captureException(error);
    }
  }

  return (
    <div className="flex space-x-4 mt-4">
      <span onClick={handleExportDoc} title="Save as MS Word doc">
        <FaFileWord className="cursor-pointer text-2xl hover:text-blue-700" />
      </span>
      <span onClick={handleExportPdf} title="Save as PDF">
        <FaFilePdf className="cursor-pointer text-2xl hover:text-red-600" />
      </span>
      <span onClick={handlePrint} title="Print letter">
        <FaPrint className="cursor-pointer text-2xl hover:text-gray-700" />
      </span>
      <span onClick={handleEmail} title="Email letter">
        <FaEnvelope className="cursor-pointer text-2xl hover:text-blue-500" />
      </span>
    </div>
  );
}