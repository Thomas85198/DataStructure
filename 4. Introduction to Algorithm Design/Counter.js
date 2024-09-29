function intersection(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]] += 1;
    }
  }
  console.log(counter);
  // loop over the counter
  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }

  console.log(result);
}

intersection([1, 2, 3], [5, 16, 10, 3, 1]); // [1, 3]
