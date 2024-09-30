palindrome("tacocat"); // true
palindrome("amanaplanacanalpanama"); // true
palindrome("asdfsafeaw"); // false

function palindrome(str) {
    let arr = str.split("");
    let left = 0;
    let right = arr.length - 1;

    while (right > left) {
        if (arr[left] != arr[right]) {
            console.log(str + " is a not palindrome");
            return false;
        }
        left++;
        right--;
    }
    console.log(str + " is a palindrome");
    return true;
}