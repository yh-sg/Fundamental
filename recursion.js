//* 1. Base Case 
//? 2. Different input
//!  No base case and return wrong thing could cause stack overflow

function countDown(num){
    //TODO Base Case
    if(num==0){
        console.log('all done');
        return;
    }else{
        console.log(num);
        countDown(num-1)
    }
}

function factorial(num){
    if(num===1) return 1
    return num * factorial(num-1)
}

function power(base,exponent){
    if(exponent===0) return 1
    return base * power(base,exponent-1)
}

function productOfArr(arr){
    if(arr.length===0) return 1
    return arr[0] * productOfArr(arr.slice(1))
}

function recursiveRange(num){
    if(num===1) return 1
    return num + recursiveRange(num-1)
}

function fib(num){
    if(num<=2) return 1
    return fib(num-2) + fib(num-1)
}

function reverse(str){
    // reverse('awesome') // 'emosewa'
    // reverse('rithmschool') // 'loohcsmhtir'
    if(str.length === 0) return str;
	return reverse(str.slice(1))+str[0];
}

function isPalindrome(str){
    // isPalindrome('awesome') // false
    // isPalindrome('foobar') // false
    // isPalindrome('tacocat') // true
    // isPalindrome('amanaplanacanalpanama') // true
    // isPalindrome('amanaplanacanalpandemonium') // false
    if(str.length === 1) return true;
    if(str.length === 2) return str[0]===str[1]
    if(str[0]===str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false
}

function someRecursive(arr, callback){
    // someRecursive([1,2,3,4], isOdd) // true
    // someRecursive([4,6,8,9], isOdd) // true
    // someRecursive([4,6,8], isOdd) // false
    // someRecursive([4,6,8], val => val > 10); // false
    if(arr.length===0) return false;
    if(callback(arr[0])) return true;
    return someRecursive(arr.slice(1),callback);
  }

let result = [];

function capitalizeFirst (arr) {
    // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
    if(arr.length===0) return result;
    
    let capLetter = arr[0].substring(0,1).toUpperCase();
    result.push(capLetter + arr[0].slice(1));
    return capitalizeFirst(arr.slice(1))
}

let result = [];

function capitalizeWords (arr) {
  if(arr.length===0) return result;
  result.push(arr[0].toUpperCase());
  return capitalizeWords(arr.slice(1));
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']