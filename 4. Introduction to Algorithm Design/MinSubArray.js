minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11); // 2

function minSubLength(arr, num) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < arr.length) {
    currentSum += arr[right];

    while (currentSum >= num) {
      // 更新 minLength && left++
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      currentSum -= arr[left];
      left++;
    }

    right++;
  }

  if (minLength == Infinity) {
    return 0;
  } else {
    console.log(minLength);
    return minLength;
  }
}
