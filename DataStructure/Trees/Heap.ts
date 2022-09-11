interface ISwapMethod{
    HeapArr:number[];
    swap(temp:number, element:number):void
}

interface ICommonHeapMethod extends ISwapMethod{
    insert(element:number):number[];
}

interface IMinHeap extends ICommonHeapMethod{
    extractMin():number[];
}

interface IMaxHeap extends ICommonHeapMethod{
    extractMax():number[];
}

class HeapSwapImpl implements ISwapMethod{
    HeapArr:number[];
    constructor(){
        this.HeapArr=[];
    }

    swap(temp: number, elementIndex: number): void {
        [this.HeapArr[temp],this.HeapArr[elementIndex]] = [this.HeapArr[elementIndex], this.HeapArr[temp]]
    }

}

class MaxBinaryHeapImpl extends HeapSwapImpl implements IMaxHeap{
    constructor(){
        super();
    }
    insert(element: number): number[] {
        //push to last slot in array
        this.HeapArr.push(element)

        //Declare index of this pushed array and the parent array of the heap
        let index = this.HeapArr.length - 1,
            parentIndex = Math.floor((index-1)/2);  //left(all odd number), right(all even number) 

        //If higher than parentIndex, do swapping until no longer higher.
        while(this.HeapArr[parentIndex]<this.HeapArr[index]){
            this.swap(parentIndex, index);
            //!Set index to parentIndex and parentIndex to new parentIndex, loop again until equal or lesser
            index=parentIndex;
            parentIndex=Math.floor((index-1)/2);
        }

        return this.HeapArr;
    }
    extractMax(): number[] {
        throw new Error("Method not implemented.");
    }
}

class MinBinaryHeapImpl extends HeapSwapImpl implements IMinHeap{
    constructor(){
        super();
    }
    insert(element: number): number[] {
        //* Similar as above, just while statement different condition.
        this.HeapArr.push(element)

        let index = this.HeapArr.length - 1,
            parentIndex = Math.floor((index-1)/2); 

        while(this.HeapArr[parentIndex]>this.HeapArr[index]){
            this.swap(parentIndex, index);
            index=parentIndex;
            parentIndex=Math.floor((index-1)/2);
        }

        return this.HeapArr;
    }
    extractMin(): number[] {
        throw new Error("Method not implemented.");
    }
}

// let heap = new MaxBinaryHeapImpl();
let heap = new MinBinaryHeapImpl();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12)
console.log(heap.insert(55));