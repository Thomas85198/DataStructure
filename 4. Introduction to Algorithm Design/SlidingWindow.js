maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // 12
// minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let max_value = 0;
  for (let i = 0; i < size; i++) {
    max_value += arr[i];
  }

  // 再做第二個循環，起點由 0 開始
  let tempValue = max_value;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue > max_value) {
      max_value = tempValue;
    }
  }

  console.log(max_value);
  return max_value;
}

function minSum(arr, size) {
  let min_value = Infinity;

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let window = [];
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      window.push(arr[j]);
      attempt += arr[j];
    }
    console.log(window);

    if (attempt < min_value) {
      min_value = attempt;
    }
    // console.log(min_value);
    // return min_value;
  }
  console.log(min_value);
  return min_value;
}
