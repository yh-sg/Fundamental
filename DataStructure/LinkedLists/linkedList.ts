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

    // must have a value
    constructor(val:T){
        let node = new SingleLinkedListNode(val);
        this.head = node;
        this.tail = node;
    }
    append(data: T): void {
        throw new Error("Method not implemented.");
    }
    traverse(): void {
        throw new Error("Method not implemented.");
    }
    prepend(data: T): void {
        throw new Error("Method not implemented.");
    }
    insert(data: T, index: number): void {
        throw new Error("Method not implemented.");
    }
    get(index: number):SingleLinkedListNode<T> {
        throw new Error("Method not implemented.");
    }

}

let list = new SinglyLinkedList(1);