import { formatDateToDDMMYYYY } from './formatHelpers';

export function generateAppealLetter(formData, appealAnalysis) {
  const {
    fullName,
    userStreet,
    userCity,
    userPostcode,
    userEmail,
    userPhone,
    issuerName,
    issuerStreet,
    issuerCity,
    issuerPostcode,
    ticketReference,
    dateOfIncident,
    location,
    reasonsSelected,
    reasonDetails,
    evidenceFiles
  } = formData;

  const formattedDateIncident = formatDateToDDMMYYYY(dateOfIncident);
  const todayIso = new Date().toISOString();
  const formattedToday = formatDateToDDMMYYYY(todayIso);

  // Check if notice was likely unfair
  const unfairNotice = appealAnalysis?.likely;

  // Build reason text
  let reasonsText = '';
  reasonsSelected.forEach((reason) => {
    reasonsText += `\n• ${reason}`;
    if (reasonDetails[reason]?.trim()) {
      reasonsText += `: ${reasonDetails[reason]}`;
    }
  });

  const unfairStatement = unfairNotice
    ? 'Based on the facts above, I believe this notice was unfairly issued. '
    : '';

  return `
${fullName}
${userStreet}
${userCity}, ${userPostcode}
Email: ${userEmail}
Phone: ${userPhone}

${formattedToday}

To:
${issuerName}
${issuerStreet}
${issuerCity}, ${issuerPostcode}

Dear Sir/Madam,

Re: Parking Ticket Reference ${ticketReference} – Issued on ${formattedDateIncident} at ${location}

I am writing to formally challenge the above parking ticket. I have provided my reasons and all relevant evidence below. ${unfairStatement}I respectfully request that you review this information and cancel the notice in light of the evidence presented.

Grounds for Challenge:
${reasonsText || 'No specific reasons were selected.'}

Enclosed/Attached Evidence:
${evidenceFiles && evidenceFiles.length ? 'I have included the following files for your reference.' : 'No additional files were provided.'}

Please confirm receipt of my appeal and provide a full response explaining whether you will cancel the ticket. If you choose not to cancel, please explain in detail why.

Yours faithfully,

${fullName}
  `;
}