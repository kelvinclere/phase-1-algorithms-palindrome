function isPalindrome(word) {

  return word.split('').reverse().join('');
}
  function isPalindrome(word) {
    //reverse the input string
    const reverseWord = reverseString(word);
    if(word == reverseWord) {
      return true;
    }else {
      return false;
    }
  }
 


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  if the reversed string is the same as the input
  return true
  else 
    return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
