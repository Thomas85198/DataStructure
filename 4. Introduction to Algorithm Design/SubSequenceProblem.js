isSubsequence("hello", "hello Dear"); // true
isSubsequence("book", "brooklyn"); // true
isSubsequence("abc", "bac"); // false

function isSubsequence(str1, str2) {
  // 全部刪掉就等於 str1 了
  if (str1.length == 0) {
    return true;
  }

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    // 如果找到一樣的字母，pointer1 就往前走
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    // 如果 pointer1 走到底了，就代表 str1 全部都在 str2 裡面
    if (pointer1 >= str1.length) {
      console.log("true");
      return true;
    }
    // pointer2 不管怎麼樣都要往前走
    pointer2++;
  }
  console.log("false");
  return false;
}
