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
    
    //Next is to do recursion
    //Base case
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2),
        left = mergeSort(arr.slice(0,mid)),
        right = mergeSort(arr.slice(mid)); 
    
    return mergeTwoArr(left,right); // this thing will keep call mergeSort until it left with base case on both side then execute, afterwards it will execute the result given from base case and onwards.

    // 0. mergeSort([6,5,3,1,8,7,2,4]) -> Starting 
    // 1. mergeSort([6,5,3,1]) -> Part 1
    // 2. mergeSort([6,5])
    // 3. mergeSort([6])
    // 4. return [6]
    // 5. mergeSort([5])
    // 6. return [5]
    // 7. mergeTwoArr([6],[5]) -> [5,6]
    // 8. mergeSort([3,1])
    // 9. mergeSort([3])
    // 10. return [3]
    // 11. mergeSort([1])
    // 12. return [1]
    // 13. mergeTwoArr([3],[1]) -> [1,3]
    // 14. mergeTwoArr([5,6],[1,3]) -> looks like this mergeTwoArr(mergeTwoArr([6],[5]),mergeTwoArr([3],[1])) -> [1,3,5,6] Part 1 ends
    /**********************************************************************************************************************************************/
    // 1. mergeSort([8,7,2,4]) -> Part 2
    // 2. mergeSort([8,7])
    // 3. mergeSort([8])
    // 4. return [8]
    // 5. mergeSort([7])
    // 6. return [7]
    // 7. mergeTwoArr([8],[7]) -> [7,8]
    // 8. mergeSort([2,4])
    // 9. mergeSort([2])
    // 10. return [2]
    // 11. mergeSort([4])
    // 12. return [4]
    // 13. mergeTwoArr([2],[4]) -> [2,4]
    // 14. mergeTwoArr([7,8],[2,4]) -> looks like this mergeTwoArr(mergeTwoArr([8],[7]),mergeTwoArr([2],[4])) -> [2,4,7,8] Part 2 ends
    // Last execution -> mergeTwoArr([1,3,5,6],[2,4,7,8]) -> [1,2,3,4,5,6,7,8]
    
    // Overrall execution thet returns mergeSort function
    // mergeTwoArr(mergeTwoArr(mergeTwoArr([6],[5]),mergeTwoArr([3],[1])),mergeTwoArr(mergeTwoArr([8],[7]),mergeTwoArr([2],[4])))
}

//Part one, create a helper function to compare two arrays already sorted arrays.
//! This won't work if either side were not sorted. As it's comparing using only the first elements of the array
// let leftArr = [1,9,22],
//     rightArr = [2,3,10,11];

const mergeTwoArr = (left:number[], right:number[]):number[] => {

    let result:number[] = [];

    //If there's still elements in both side, keep on comparing until one side no longer have any element
    //!Not either but both side
    while(left.length && right.length ){
        left[0] < right[0] ? result.push(left.shift()!) : result.push(right.shift()!);
    }

    //Not sure which elements left, so just concat the remaining elements.
    return result.concat(left).concat(right);
}