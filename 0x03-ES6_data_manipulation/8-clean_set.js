export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  return [...set] // Convert the set to an array
    .filter((value) => typeof value === 'string' && value.startsWith(startString)) // Filter strings that start with startString
    .map((value) => value.slice(startString.length)) // Remove startString from each filtered value
    .filter((valueSubStr) => valueSubStr) // Filter out empty or invalid substrings
    .join('-'); // Join remaining parts with a dash
}
