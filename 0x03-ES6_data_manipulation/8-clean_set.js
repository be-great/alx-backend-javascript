export default function cleanSet(set, startString) {
  // check if the startstring is string and not empty
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  // filter string start with bon
  const result = [...set]
    .filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');
  return result;
}
