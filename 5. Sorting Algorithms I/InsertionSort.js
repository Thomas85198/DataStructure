let unsorted = [14, -4, 17, 6, 22, 1, -5];

function insertionSort(arr) {
  for (let j = 1; j <= arr.length - 1; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;
    console.log(arr);
  }
}

insertionSort(unsorted);
