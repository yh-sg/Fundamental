//! Bubble Sort
//* Start looping from with a variable called i the end of the array towards the beginning
//* Start an inner loop with a variable called j from the beginning until i-1
//* If arr[j] is greater than arr[j+1], swap those two values
//  https://www.youtube.com/watch?v=lyZQPjUT5B4

const bubbleSort = (arr) => {
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

const selectionSort = (arr) => {
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

const insertionSort = (arr) => {
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
//TODO Create an empty array, take a look at the smallest values in each input array

const mergeSort = (arr) => {

    const mergeArr = (arr1,arr2) => {
        //only works with sorted arr =)
        let result = [],
            i=0,
            j=0;
        while(i<arr1.length&&j<arr2.length){
            if(arr1[i]<arr2[j]){
                result.push(arr1[i])
                i++
            }else{
                result.push(arr2[j])
                j++
            }
        }
    
        while(i<arr1.length){
            result.push(arr1[i])
            i++
        }
    
        while(j<arr2.length){
            result.push(arr2[j])
            j++
        }
    
        return result
    }

    //base case
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2),
        left = mergeSort(arr.slice(0,mid)),
        right= arr.slice(mid);
    return mergeArr(left, right);
}