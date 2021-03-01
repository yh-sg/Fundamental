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

    extractMax(){
        let max=this.arr[0],
            end = this.arr.pop();
        if(this.arr.length>0){
            this.arr[0] = end;
            this.sinkDown();
        }
        //[55, 39, 41, 18, 27, 12, 33] original value
        //![33, 39, 41, 18, 27, 12]
        return max
    }

    sinkDown(){
        let index = 0;
        const length = this.arr.length,
            element = this.arr[0];
        while(true){
            //Becareful of out of bound. Will crash
            let leftChildIndex = 2*index+1,
                rightChildIndex = 2*index+2,
                leftChild,
                rightChild,
                swap=null;

            if(leftChildIndex < length){ //check if it's inbound or not
                leftChild = this.arr[leftChildIndex];
                if(leftChild>element) swap = leftChildIndex;
            }

            if(rightChildIndex < length){ //check if it's inbound or not
                rightChild = this.arr[rightChildIndex];
                if((swap!==null&&rightChild>leftChild) || (swap===null&&rightChild>element))
                    swap = rightChildIndex;
            }
            if(swap===null) break;
            this.arr[index] = this.arr[swap];
            this.arr[swap] = element;
            index = swap
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