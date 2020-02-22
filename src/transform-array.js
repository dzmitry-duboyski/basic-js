module.exports = function transform(arr) {
  let df = arr.length
  if (arr instanceof SyntaxError) {
    console.log("SyntaxError");
  }
  if (!Array.isArray(arr)) {
    throw 'Error';
  }

  let resultArray = [];

  const controlElement = {
    '--discard-next': '--discard-next',
    '--discard-prev': '--discard-prev',
    '--double-next': '--double-next',
    '--double-prev': '--double-prev',
  }

  function isControlElement(elem) {
    if (arr[elem] in controlElement) { return true;}
    return false;
  }

  for (i = 0; i < arr.length; i++) {
    if (!isControlElement(i)) {
      resultArray.push(arr[i]);
    }

    if (i < 1) {
      if (arr[i] === '--discard-prev') {continue;}
      if (arr[i] === '--double-prev') {continue;}
    }

    if (i == arr.length - 1) {
      if (arr[i] === '--double-next') {continue;}
      if (arr[i] === '--discard-next') {continue;}
    }

    if (arr[i] === '--discard-next') {i++; continue;}
    if (arr[i] === '--discard-prev' && !isControlElement(i - 1)) {resultArray.pop(); continue;}
    if (arr[i] === '--double-next' && !isControlElement(i + 1)) {resultArray.push(arr[i + 1]); continue;}
    if (arr[i] === '--double-prev' && !isControlElement(i - 1)) {resultArray.push(arr[i - 1]); continue;}
  }
  return resultArray;
}