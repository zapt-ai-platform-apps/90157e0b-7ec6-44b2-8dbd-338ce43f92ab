export function formatDateToDDMMYYYY(isoString) {
  if (!isoString) return '';
  // If isoString includes time, split at 'T' to isolate date
  const datePart = isoString.split('T')[0] || isoString;
  const [year, month, day] = datePart.split('-');
  if (!year || !month || !day) return isoString;
  return `${day}/${month}/${year}`;
}