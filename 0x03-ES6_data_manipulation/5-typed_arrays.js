export default function createInt8TypedArray(length, position, value) {
  // create an arrayBuffer
  const buffer = new ArrayBuffer(length);
  // create dataview
  const dataView = new DataView(buffer);
  // check if the position is valid
  if (position >= length || position < 0) throw new Error('Position outside range');
  // set the int8 value at the specified position
  dataView.setInt8(position, value);
  return dataView;
}
