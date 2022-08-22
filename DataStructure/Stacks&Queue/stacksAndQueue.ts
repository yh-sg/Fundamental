import { IQueue, IStack } from "./Interface";

export class NODE<T>{

    public val:T;
    public next:NODE<T>|null;

    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack<T> implements IStack<T>{

    protected top:NODE<T>|null;
    protected bottom:NODE<T>|null;
    protected length:number;

    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }
    
    traverse(): T[] {
        throw new Error("Method not implemented.");
    }
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    peek(): T {
        throw new Error("Method not implemented.");
    }
    push(val: T): void {
        throw new Error("Method not implemented.");
    }
    pop(): void {
        throw new Error("Method not implemented.");
    }
    
}

class Queue<T> implements IQueue<T>{

    protected top:NODE<T>|null;
    protected bottom:NODE<T>|null;
    protected length:number;

    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }

    traverse(): T[] {
        throw new Error("Method not implemented.");
    }
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    peek(): T {
        throw new Error("Method not implemented.");
    }
    enqueue(val: T): void {
        throw new Error("Method not implemented.");
    }
    dequeue(): void {
        throw new Error("Method not implemented.");
    }
}

let stack = new Stack()
let queue = new Queue()