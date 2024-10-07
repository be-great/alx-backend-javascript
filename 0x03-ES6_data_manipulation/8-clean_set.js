export default function cleanSet(set, startString) {
  // check if the startstring is string and not empty
  if (!startString || typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }
  // filter string start with bon
  const result = [...set]
    .filter((str) => str.startsWith(startString) && typeof str === 'string')
    .map((str) => str.slice(startString.length))
    .join('-');
  return result;
}
