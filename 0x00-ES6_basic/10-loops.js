export default function appendToEachArrayValue(array, appendString) {
    const nArr = [];
    for (let value of array) {
        nArr.push(appendString + value);
    }
  
    return nArr;
  }