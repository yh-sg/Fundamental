//? Problem pattern 1, Frequency Counter

//! Naive solution o(n^2)
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
  
  //! o(n) solution
  function same(arr1,arr2) {
      if (arr1.length !== arr2.length) return false;
      let freqCounter1 = {},
        freqCounter2 = {};
      for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val]||0) + 1
      }
      for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val]||0) + 1
      }
  }
  
  //? Problem pattern 2 - Multiple pointers
  
  //works only if sorted arr
  function sumZero(arr) {
    let left = 0
    let right = arr.length-1
    while(left<right){
        let sum = arr[left]+arr[right]
        if(sum===0){
          return (arr[left],arr[right])
        } else if(sum>0){
          right--
        } else{
          left++
        }
    }
  }
  
  function countUniqueValues(arr){
    if(arr.length<=0) return 0;
    let i=1
    for (let j = 0; j < arr.length; j++) {
      if(arr[i]!==arr[j]){
        i++
        arr[i]=arr[j]
      }
    }
    return i;
  }
  countUniqueValues([1,1,1,2,2,3,3,4,4,6,7,8,8,9])
  
  // function countUniqueValues(arr){
  //   let obj = {}
  //   for(let i=0;i<arr.length;i++){
  //       obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1; 
  //   }
  //   return Object.keys(obj).length
  // }
  
  //!Problem pattern 3 - Sliding windows
  // 1. Use two pointers: start and end to represent a window.
  // 2. Move end to find a valid window.
  // 3. When a valid window is found, move start to find a smaller window.
  //? Size of 3 sliding window
  //? [a b c d e f g h]
  //? [a b c]
  //?   [b c d]
  //?     [c d e]
  //?       [d e f]
  //?         [e f g]
  //?           [f g h]
  
  function maxSubArray(arr, num) {
    let maxSum = 0,
      tempSum = 0;
    if(arr.length<num) return null;
  
    for (let i = 0; i < num; i++) {
      maxSum += arr[i] 
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i-num] + arr[i]
      console.log(tempSum)
      maxSum = Math.max(maxSum,tempSum)
    }
    return maxSum
  }
  maxSubArray([2,6,9,2,1,8,5,6,3],3)
  
  //Problem pattern 4 - Divide and Conquer  