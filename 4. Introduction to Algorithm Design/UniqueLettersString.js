// Counter 去記錄，end 每次向右移動一格，若遇到一樣的移動 start
// Counter 重新計算
// 去統計最長的 Counter

function uniqueLetterString(str) {
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = -Infinity;

  while (end < str.length) {
    console.log(counter);
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } else {
      counter[str[end]] = 1;
      end++;
      if (end - start > maxLength) {
        maxLength = end - start;
      }
    }
  }

  if (maxLength == -Infinity) {
    console.log("Cannot find unique letters substring.");
    return null;
  }

  console.log(maxLength);
  return maxLength;
}

uniqueLetterString("thisishowwedoit"); // 6
