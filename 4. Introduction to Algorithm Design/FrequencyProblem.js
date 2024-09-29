function sameFrequency(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let arr3 = arr1.concat(arr2);
  let result = true;
  let counter = {};
  let firstValue;

  if (arr1.length != arr2.length) {
    result = false;
    return result;
  }

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  for (let property in counter) {
    if (firstValue === null || firstValue === undefined) {
      firstValue = counter[property];
    } else if (counter[property] !== firstValue) {
      result = false;
      break;
    }
  }
  console.log(result);
  return result;
}

sameFrequency("abbc", "aabc");
sameFrequency("abba", "abab");
