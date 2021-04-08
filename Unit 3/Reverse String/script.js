let str = 'racecar';

function checkPalindrome(str) {
  let inputArr = str.toLowerCase().split('');
  let reverseArr = [];

  for (char of inputArr) {
    reverseArr.unshift(char);
  }

  if (inputArr.join('') == reverseArr.join('')) {
    return true;
  } else return false;
}

console.log(checkPalindrome(str))