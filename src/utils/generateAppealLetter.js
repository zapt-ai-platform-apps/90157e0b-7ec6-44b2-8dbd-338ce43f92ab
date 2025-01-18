export function generateAppealLetter(formData) {
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
    otherReason
  } = formData;

  // Combine selected reasons
  let reasonsText = '';
  if (reasonsSelected.length > 0) {
    const filteredReasons = reasonsSelected.filter((r) => r !== 'Other');
    if (filteredReasons.length) {
      reasonsText += '- ' + filteredReasons.join('\n- ');
    }
    if (reasonsSelected.includes('Other') && otherReason.trim()) {
      reasonsText += `\n- Other: ${otherReason}`;
    }
  }

  return `
From:
${fullName}
${userStreet}
${userCity}, ${userPostcode}
${userEmail}
${userPhone}

To:
${issuerName}
${issuerStreet}
${issuerCity}, ${issuerPostcode}

Date: ${dateOfIncident}

To whom it may concern,

Re: Parking ticket ${ticketReference}

I was issued a parking ticket for parking at ${location} on ${dateOfIncident}. I wish to challenge this parking ticket on the following grounds:

${reasonsText || 'No specific reasons provided.'}

I have enclosed any relevant evidence to support my appeal. Please review and confirm whether this ticket meets all legal requirements.

Yours faithfully,

${fullName}
  `;
}