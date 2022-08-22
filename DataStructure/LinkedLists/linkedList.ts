//?What is a linked list?

import { ILinkedListMethods } from "./ILinkedListMethods";

//Data Structure that contains a head, tail and length property
//LL consist of nodes, and each node has a value(piece of data) and a pointer(next) to another node or null

//LL(Think of it like a staircase/elevator) vs Array
//Do not have indexes! | Indexed in order!
//Connected via nodes with a next pointer
//Random access is not allowed | Can Quickly be accessed at a specific index

export class SingleLinkedListNode<T> {
    public val: T;
    public next: SingleLinkedListNode<T>|null;
    constructor(data: T) {
        this.val = data;
        this.next = null;
    }
}

class SinglyLinkedList<T> implements ILinkedListMethods<T>{

    //head, tail and length property
    protected head: SingleLinkedListNode<T>;
    protected tail: SingleLinkedListNode<T>;
    protected length: number;

    // must have a value or empty
    constructor(val?:T){
        this.head = new SingleLinkedListNode(val) ?? null;
        this.tail = new SingleLinkedListNode(val) ?? null;
        this.length = val ? 1 : 0;
    }

    append(val: T): boolean {
        let node = new SingleLinkedListNode(val);
        if(this.length===0){ //! Handle 0 length | !this.head
            this.tail = node;
            this.head = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return true;
    } //deal with tail

    traverse(): T[] {
        let current = this.head;
        let arr = [];
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        return arr
    }

    prepend(val: T): boolean {
        let node = new SingleLinkedListNode(val); 
        if(this.length===0){ //! Handle 0 length | !this.head
            this.tail = node;
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return true;
    } //deal with head

    insert(val: T, index: number): boolean {
        
        if(index>this.length||index<0) return false; //index validation
        
        if(index===this.length) return !!this.append(val); //If last index
        
        if(index===0) return !!this.prepend(val); //If first index

        //Do search for previous and after using get method
        let node = new SingleLinkedListNode(val),
            previousNode = this.get(index-1), //Previous Node
            nextNode = previousNode.next;

        previousNode.next = node;
        node.next = nextNode;
        this.length++;
        
        return true;
    }
    
    get(index: number):SingleLinkedListNode<T> {
        if(index<0||index>=this.length) //index validation
            return null;
        let counter = 0,
            current = this.head;
        while(counter!=index){
            current = current.next;
            counter++;
        }
        return current;
    }
    
    shift(): boolean {
        throw new Error("Method not implemented.");
    }

    pop(): boolean {
        throw new Error("Method not implemented.");
    }
    set(val: T): boolean {
        throw new Error("Method not implemented.");
    }
    remove(val: T, index: number): void {
        throw new Error("Method not implemented.");
    }

}

let list = new SinglyLinkedList();
// console.log(list);
list.append(2);
list.prepend(0);
list.append(2);
list.append(2);

console.log(list.traverse());
console.log(list);