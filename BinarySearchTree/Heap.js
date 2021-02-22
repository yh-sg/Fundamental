class MaxBinaryHeap{
    constructor(){
        this.arr=[];
    }
    insert(element){
        this.arr.push(element)
        let index = this.arr.length - 1,
            parentIndex = Math.floor((index-1)/2);
        while(this.arr[parentIndex]<this.arr[index]){
            let temp = this.arr[parentIndex];
            this.arr[parentIndex] = this.arr[index];
            this.arr[index] = temp; //Swapping done
            index = parentIndex; //Set the index to be parentIndex, start over
            parentIndex = Math.floor((index-1)/2);
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.arr);

//      Original tree
//             41
//     39              33
// 18     27       12

//         After tree
//             55
//     39              41
// 18     27       12       33