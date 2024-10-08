averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5); // [[-11, 14], [0, 3], [1, 2]]

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (right > left) {
    let temp_avg = (arr[left] + arr[right]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else if ((temp_avg = avg)) {
      result.push([arr[right], arr[left]]);
      right--;
      left++;
    }
  }

  console.log(result);
  return result;
}
