import { IQueue, IStack } from "./Interface";

export class NODE<T>{

    public val:T;
    public next:NODE<T>|null;

    constructor(val:T){
        this.val = val;
        this.next = null;
    }
}

//LIFO
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
        let arr:T[] = [],
            current = this.bottom;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        return arr;
    }
    isEmpty(): boolean {
        return this.length === 0;
    }
    peek(): T | undefined {
        return this.top?.val;
    }
    push(val: T): void {
        let newNode = new NODE(val);
        if(!this.top){
            this.top=newNode;
            this.bottom=newNode;
        }else{
            this.top.next=newNode;
            this.top=newNode;
        }
        this.length++;
        return;
    }
    pop(): void {
        if(!this.bottom||!this.top)
            return;
        if(this.length===1){
            this.top=null;
            this.bottom=null;
            this.length--;
            return;
        }
        //Create a getter to get the node before top
        let current = 0,
            currentNode=this.bottom;
        while(currentNode.next&&current<this.length-2){
            currentNode=currentNode.next;
            current++;
        }
        currentNode.next=null;
        this.top=currentNode;
        this.length--;
        return;
    }
}

class ArrayStack<T> implements IStack<T>{
    protected array:T[];
    constructor(){
        this.array=[];
    }
    push(val: T): void {
        this.array.push(val);
    }
    pop(): void {
        this.array.pop();
    }
    isEmpty(): boolean {
        return this.array.length===0;
    }
    peek(): T | undefined {
        return this.array[this.array.length-1]
    }
    traverse(): T[] {
        return this.array;
    }
}

//FIFO
class Queue<T> implements IQueue<T>{

    protected first:NODE<T>|null;
    protected last:NODE<T>|null;
    protected length:number;

    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }

    traverse(): T[] {
        let arr:T[] = [],
            current = this.first;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        return arr;
    }
    isEmpty(): boolean {
        return this.length === 0;
    }
    peek(): T | undefined {
        return this.first?.val;
    }
    enqueue(val: T): void {
        let newNode = new NODE(val);
        if(!this.last){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }
        this.length++;
        return;
    }
    dequeue(): void {
        if(!this.first||!this.last)
            return;
        if(this.length===1){
            this.first=null;
            this.last=null;
            this.length--;
            return;
        }
        //Create the after first node, remove the first
        let currentNode=this.first.next;
        this.first.next=null;
        this.first=currentNode;
        this.length--;
        return;
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop();
console.log(stack.traverse());
stack.push(4)
stack.push(5)
stack.pop();
stack.pop();
stack.pop();
console.log(stack.traverse());

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.dequeue()
console.log(queue.traverse());
queue.enqueue('d')
queue.enqueue('e')
queue.dequeue()
console.log(queue.traverse());
console.log(queue.isEmpty());
