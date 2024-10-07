export default function hasValuesFromArray(set, array) {
  // for every element in the array it should be in the set
  return array.every((value) => set.has(value));
}
