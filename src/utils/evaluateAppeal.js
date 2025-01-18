import { reasonsMap } from './reasons';

export function evaluateAppeal(formData) {
  const { reasonsSelected } = formData;
  let likely = false;
  let explanationParts = [];

  reasonsSelected.forEach(reason => {
    if (reasonsMap[reason]) {
      likely = true;
      explanationParts.push(reasonsMap[reason]);
    }
  });

  if (reasonsSelected.includes('Other') && formData.reasonDetails['Other']?.trim()) {
    explanationParts.push(
      `Other reason provided: ${formData.reasonDetails['Other']}`
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