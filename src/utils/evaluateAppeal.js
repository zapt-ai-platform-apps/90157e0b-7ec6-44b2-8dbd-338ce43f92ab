export function evaluateAppeal(formData) {
  const { reasonsSelected } = formData;
  let likely = false;
  let explanationParts = [];

  if (reasonsSelected.includes('Insufficient signage')) {
    likely = true;
    explanationParts.push(
      'Insufficient signage can often lead to a successful appeal if photo evidence proves signs were not clearly visible.'
    );
  }
  if (reasonsSelected.includes('Defective or missing meter')) {
    likely = true;
    explanationParts.push(
      'A broken or missing meter can invalidate a ticket if you couldn’t pay or obtain a valid ticket.'
    );
  }
  if (reasonsSelected.includes('Ticket arrived too late or missing details')) {
    likely = true;
    explanationParts.push(
      'If a ticket arrives beyond the allowed time threshold or lacks important information, it may not be enforceable.'
    );
  }
  if (reasonsSelected.includes('Grace period was not honored')) {
    likely = true;
    explanationParts.push(
      'You may have grounds if you left or arrived within the legally mandated grace period.'
    );
  }
  if (reasonsSelected.includes('Medical or emergency circumstances')) {
    likely = true;
    explanationParts.push(
      'Medical or emergency reasons can bolster an appeal, especially if you can provide evidence (hospital note, etc.).'
    );
  }
  if (reasonsSelected.includes('Vehicle breakdown')) {
    likely = true;
    explanationParts.push(
      'A mechanical fault preventing moving the vehicle can be a valid defense if documented.'
    );
  }
  if (reasonsSelected.includes('Stolen vehicle or cloned plates')) {
    likely = true;
    explanationParts.push(
      'You could be exempt if you have a crime reference or evidence showing you were not responsible.'
    );
  }
  if (reasonsSelected.includes('Other') && formData.otherReason.trim()) {
    explanationParts.push(
      `Other reason provided: ${formData.otherReason}`
    );
  }

  let combinedExplanation;
  if (explanationParts.length === 0) {
    combinedExplanation = 'No standard strong reasons were selected. This does not mean you cannot appeal, but success may be uncertain without further evidence.';
  } else {
    combinedExplanation = explanationParts.join(' ');
  }

  return {
    likely,
    explanation: combinedExplanation
  };
}