//! Bubble Sort
//* Start looping from with a variable called i the end of the array towards the beginning
//* Start an inner loop with a variable called j from the beginning until i-1
//* If arr[j] is greater than arr[j+1], swap those two values

const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true //! Optimization for buuble sort!!
        for (let j = 0; j < i-1; j++) {
            console.log(arr,arr[j],arr[j+1]);
            if(arr[j]>arr[j+1]){
                //SWAP
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false;
            }
        }
        console.log("one cycle complete");
        //? Optimization for buuble sort!!
        if(noSwaps) break;
    }
    return arr
}