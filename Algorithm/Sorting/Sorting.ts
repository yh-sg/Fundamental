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
    //selection sort, loop through and find the smallest one. It doesn't need to swap until it scans through all the elements.
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
    //TODO(27/10)
    
    return arr;
}

const quickSort = (arr:number[]):number[] => {
    //TODO(28/10)
    
    return arr;
}

const mergeSort = (arr:number[]):number[] => {
    //TODO(29/10)
    
    return arr;
}

console.log(bubbleSort(arr));