maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2); // 12
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  let max_value = -Infinity;

  if (size > arr.length) {
    return null; // 我們找不到這樣的 Sliding Window
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let window = [];
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      // console.log(i, j);
      window.push(arr[j]);
      attempt += arr[j];
    }
    /**
     * [ 2, 7, 3 ]
       [ 7, 3, 0 ]
       [ 3, 0, 6 ]
       [ 0, 6, 1 ]
       [ 6, 1, -5 ]
       [ 1, -5, -12 ]
     */
    // console.log(window);
    if (attempt > max_value) {
      max_value = attempt;
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
