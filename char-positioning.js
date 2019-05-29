function listIndex(string) {
 var charIndex = {};
 var stringArray = string.split('');

 stringArray.forEach(function(element, index) {
   if (element in charIndex) {
     charIndex[element].push(index);
   } else {
     charIndex[element] = [index];
   }
 });

 delete charIndex[' '];
 return charIndex;
}

console.log(listIndex("lighthouse in the house"));