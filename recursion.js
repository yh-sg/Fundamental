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

function sumRange(num) {
    //TODO Base Case
    if(num===1) return 1;
    return num + sumRange(num-1)
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
    // productOfArray([1,2,3]) // 6
    // productOfArray([1,2,3,10]) // 60
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
    if(str.length === 0) return str;
	return reverse(str.slice(1))+str[0];
}

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0]===str[1]
    if(str[0]===str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false
}

function someRecursive(arr, callback){
    if(arr.length===0) return false;
    if(callback(arr[0])) return true;
    return someRecursive(arr.slice(1),callback);
  }

  let result = [];

function capitalizeFirst (arr) {
  if(arr.length===0) return result;
  
  let capLetter = arr[0].substring(0,1).toUpperCase();
  result.push(capLetter + arr[0].slice(1));
  return capitalizeFirst(arr.slice(1))
}