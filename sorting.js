//! Bubble Sort
//* Start looping from with a variable called i the end of the array towards the beginning
//* Start an inner loop with a variable called j from the beginning until i-1
//* If arr[j] is greater than arr[j+1], swap those two values
//  https://www.youtube.com/watch?v=lyZQPjUT5B4

let bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true //! Optimization for buuble sort!!
        for (let j = 0; j < i-1; j++) {
            // console.log(arr,arr[j],arr[j+1]);
            if(arr[j]>arr[j+1]){
                //SWAP
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false;
            }
        }
        // console.log("one cycle complete");
        if(noSwaps) break; //? Optimization for bubble sort!!
    }
    return arr
}

//! Selection Sort
//? Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
//* Store the first element as the smallest value you've seen so for.
//* Compare this item to the next item in the array until you find a smaller number
//* If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array
//* If the 'minimum' is not the value(index) you initially began with, swap the two values
//* Repeat this with the next element until the array is sorted
//  https://www.youtube.com/watch?v=Ns4TPTC8whw

let selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i+1; j < arr.length; j++) {
            // console.log(i, j)
            if(arr[j]<arr[lowest]){
                lowest = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp
    }
    return arr
}

//! Insertion Sort
//? Builds up the sort by gradually creating a larger left half which is always sorted
//* Start by picking the second element in the array
//* Now compare the second element with the one before it and swap if necessary
//* Continue to the next element and if it is in the incorrent order, iterate through the sorted portion(i.e. the left side) to place the element in the corrent place.
//  https://www.youtube.com/watch?v=ROalU379l3U&t=83s

let insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i],
            j
        for (j = i-1; j >= 0 && arr[j]>currVal; j--) {
            arr[j+1] = arr[j]
            console.log(arr);
        }
        arr[j+1] = currVal
    }
    return arr
}

//! Merge Sort
//? Divide and conquer
//* In order to inmplement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
//* Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// https://www.youtube.com/watch?v=XaqR3G_NVoo

let mergeSort = (arr) => {

    const mergeArr = (arr1,arr2) => {
        //only works with sorted arr =)
        let result = [];
        while(arr1.length&&arr2.length){
            if(arr1[0]<arr2[0]){
                result.push(arr1.shift())
            }else{
                result.push(arr2.shift())
            }
        }
        return [...result,...arr1,...arr2]
    }

    //base case
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2),
        left = mergeSort(arr.slice(0,mid)),
        right= mergeSort(arr.slice(mid));
    return mergeArr(left, right);
}

//!Quick Sort
//* Like merge sort, exploits the face that arrays of 0/1 element are always sorted
//* Use "pivot" and find the index where pivot should end up in sorted array
//* Once the pivot is positioned, quick sort is applied on either side of the pivot 
// https://www.youtube.com/watch?v=ywWBy6J5gz8 (this video shows 1st element as pivot, start from back)

let quickSort = (arr, left = 0, right = arr.length - 1) => {

    let pivot = (arr, start=0, end=arr.length-1)=>{
        const swap = (arr,i,j) => {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    
        let pivotNum = arr[start],
            swapIndex = start;
    
        for (let i = start+1; i < arr.length; i++) {
            if(pivotNum > arr[i]){
                swapIndex++
                swap(arr,swapIndex,i)
            }
        }
        swap(arr,start,swapIndex)
        return swapIndex;
    }
        
    if(left<right){ //base case
        pivotIndex = pivot(arr,left,right)
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right)
    } 
    return arr;
}
    
console.log(quickSort([3,8,7,1,2,5,0,6]))
console.log(quickSort([4,8,2,1,5,7,6,3]))
console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))