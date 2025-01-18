export function evaluateAppeal(formData) {
  // Simple logic to determine if there's a decent chance of success
  // This is not legal advice
  const { issuerType, reasonForAppeal } = formData;
  let result = {
    likely: false,
    message: 'Your appeal requires further review. This is not legal advice.'
  };

  if (issuerType === 'council' && reasonForAppeal.includes('lack of signage')) {
    result.likely = true;
    result.message = 'Appeals based on missing or unclear signage often have a chance of success if you have proper evidence.';
  } else if (issuerType === 'private' && reasonForAppeal.includes('overstayed by a few minutes')) {
    result.likely = true;
    result.message = 'Private parking tickets for minimal overstays can often be challenged if the signage or grace period was unclear.';
  }

  return result;
}

export function generateAppealLetter(formData) {
  const {
    fullName,
    dateOfIncident,
    location,
    issuerType,
    reasonForAppeal
  } = formData;

  return `
Dear ${issuerType === 'council' ? 'Local Council' : 'Parking Operator'},

I, ${fullName}, am writing to formally challenge the parking ticket issued on ${dateOfIncident} at ${location}.
I believe this ticket is unwarranted for the following reason(s):
${reasonForAppeal}

I kindly request you review my appeal and respond with any evidence or justification if you believe it is valid.
Thank you for your time and consideration.

Sincerely,
${fullName}
  `;
}