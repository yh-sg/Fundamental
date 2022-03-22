function charCount(str) {
  //make object to return at end
  let result = {};
  //loop over string, for each char...
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    //if the char is a num/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      //if the char is a number/letter AND not in object, add it to object and set value to one
      result[char] = 1;
    }
  }
  return result;
}
console.log(charCount("Your pin number is 1234!"));


function charCountRefactor(str) {
  //make object to return at end
  let result = {};
  //loop over string, for each char...
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      //if the char is a num/letter AND is a key in object, add one to count
      //if the char is a number/letter AND not in object, add it to object and set value to one
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}
console.log(charCountRefactor("Your pin number is 1234!"));