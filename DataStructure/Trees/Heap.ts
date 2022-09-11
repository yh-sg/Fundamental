interface ICommonHeapMethod{
    insert(element:number):number[];
}

interface IMinHeap extends ICommonHeapMethod{
    extractMin():number[];
}

interface IMaxHeap extends ICommonHeapMethod{
    extractMax():number[];
}

class MaxBinaryHeapImpl implements IMaxHeap{
    private arr:number[];
    constructor(){
        this.arr=[];
    }
    insert(element: number): number[] {
        throw new Error("Method not implemented.");
    }
    extractMax(): number[] {
        throw new Error("Method not implemented.");
    }
}

class MinBinaryHeapImpl implements IMinHeap{
    private arr:number[];
    constructor(){
        this.arr=[];
    }
    insert(element: number): number[] {
        throw new Error("Method not implemented.");
    }
    extractMin(): number[] {
        throw new Error("Method not implemented.");
    }
}