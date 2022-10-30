let arr = [6,5,3,1,8,7,2,4];

const bubbleSort = (arr:number[]):number[] => {
    //bubble up to last location, so work from first element to last element, bringing the largest to last
    for (let i = 0; i < arr.length; i++) {
        //keep on comparing the first(j) element and next element(j+1). Do not touch elements that are already bubbled up(arr.length-i).
        for (let j = 0; j < arr.length-i; j++) {
            //If greater than next element, swap.
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1]
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

const selectionSort = (arr:number[]):number[] => {
    //oop through and find the smallest one. It doesn't need to swap until it scans through all the elements.
    for (let i = 0; i < arr.length; i++) {
        let smallestElement=arr[i],
            position=-1;
        for (let j = i+1; j < arr.length; j++) {
            //Scan through, if smallest mark the value and position.
            if(smallestElement>arr[j]){
                smallestElement=arr[j];
                position=j
            }
        }
        //Place to smallest element into current location and swap with it's position.
        if(position!==-1){
            let temp=arr[i]
            arr[i]=smallestElement;
            arr[position]=temp;
        }
    }
    return arr;
}

const insertionSort = (arr:number[]):number[] => {
    //loop through the arr, keep on swapping from the last until it is no longer smallest.
    for (let i = 1; i < arr.length; i++) {
        //loop through starting from the current element descending to first element, 
        for (let j = i; j > 0; j--) {
            if(arr[j]<arr[j-1]){
                let temp=arr[j];
                arr[j]=arr[j-1]
                arr[j-1]=temp;
            }else break; //if no longer smaller, don't swap, break it.
        }
    }

    return arr;
}

const quickSort = (arr:number[]):number[] => {
    //TODO(27/10)
    
    return arr;
}

const mergeSort = (arr:number[]):number[] => {
    //First thing first, this algorithm is tough, require to break into two parts. Part one is to do the comparison helper function.
    
    return arr;
}

//Part one, create a helper function to compare two arrays already sorted arrays.
//! This won't work if either side were not sorted.
let leftArr = [1,9,22],
    rightArr = [2,3,10,11];

const mergeTwoArr = (left:number[], right:number[]):number[] => {

    let result:number[] = [];

    //If there's still number in either left/right, keep on comparing until one side no longer have any element
    while(left.length || right.length){
        left[0] < right[0] ? result.push(left.shift()!) : result.push(right.shift()!);
    }

    //Not sure which elemtns left, so just concat the remaining elements.
    return result.concat(left).concat(right);
}

console.log(mergeTwoArr(leftArr,rightArr));