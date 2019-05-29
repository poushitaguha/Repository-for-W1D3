function countLetters(string) {
  var charTotal = {};
  // Removing space in the string
  let newString = string.split(' ').join('');
  for (let char of newString) {
    if (char in charTotal) {
      // Adding the repeating occurence of letters
      charTotal[char] = charTotal[char] + 1;

    } else {
      // Adding letters to object for the first time
      charTotal[char] = 1;
    }
  }
  return charTotal;
}

console.log(countLetters("lighthouse in the house"));