//* Javascript searching methods 1.indexOf 2.includes 3.find 4.findindex

//? Linear Search

function linearSearch(arr,num) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===num){
            return i
        }
    }
    return -1
}

//? Binary Search
//*This function accepts a sorted array and a value
//*Create a left pointer at start of array, a right pointer at the end and 
//*While the left pointer comes before the right pointer

function binarySearch(arr,num) {
    arr = arr.sort((a, b) => a - b)
    let left = 0
    let right = arr.length-1
    while(left<=right){
        let middle = Math.floor((left+right)/2)
        if(num===arr[middle]){
            return middle
        }
        if(num<arr[middle]){
            right = middle-1
        }
        if(num>arr[middle]){
            left = middle+1
        }
    }
    return -1
}

// console.log(binarySearch([1,2,3,4,5],100));

//? Naive String Search
//*Suppose you want to count the number of times a smaller string appears in a longer string
//*A straightforward approach involves checking pairs of characters individually
function naiveStrSearch(longStr,shortStr) {
    let count = 0
    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            // console.log(shortStr[j],longStr[i+j]);
            if(shortStr[j]!==longStr[i+j]) break;
            if(j === shortStr.length-1) count++;
        }
    }
    return count
}

console.log(naiveStrSearch('lorie loled','lo'));

//?KMP Substring Search
//Worst case O(mn) whereas m is length or string, n is pattern
//O(m+n) avg case