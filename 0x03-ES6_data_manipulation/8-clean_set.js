export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  return [...set] // Convert the set to an array
    .filter((str) => typeof str === 'string' && str.startsWith(startString)) // Filter strings that start with startString
    .map((str) => str.slice(startString.length)) // Remove startString from each filtered value
    .filter((str) => str) // Filter out empty or invalid substrings
    .join('-'); // Join remaining parts with a dash
}
