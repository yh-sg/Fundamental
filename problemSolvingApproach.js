//Problem solving approach

//1.Understand the problem
// -Can I restate the problem in my own words?
// -What are the inputs that go into the problem
// -What are the outputs that should come from the solution to the problem
// -Can the outputs be determined from the inputs? In other words, do i have enough info to solve the problem?
// -How should I label the important pieces of data that are a part of the problem?

//2.Explores Examples
//-Start with simple Examples
//-Progress to more complex examples
//-Explore Examples with empty inputs
//-Explore Examples with invalid inputs

//3.Break it down

//4.Solve/Simplify
//-Find the core difficulty in what you're trying to do
//Temporarily ignore that difficulty
//Write a simplified solution
//Then incorporate that difficulty back in

//5. Look back and refactor
// -Can you check the result?
// -Can you derive the result differently?
// -can you understand it at a glance?
// -can you use the result or method for some other problem?
// -can you improve the performance of your solution?
// -can you think of other ways to refactor?
// -how have other people solved this problem?

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

//Devise a plan for solving problem
//Master common problem solving patterns
//What are the some pattern?
//Frequency counter, multiple pointers, sliding window, divide and conquer, dynamic programming, greedy algorithms, backtracking and many more!

// Problem pattern 1, Frequency Counter
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
console.log(same([1, 2, 3], [4, 9]));

//Problem pattern 2 - Multiple pointers
//Problem pattern 3 - Sliding windows
//Problem pattern 4 - Divide and Conquer
