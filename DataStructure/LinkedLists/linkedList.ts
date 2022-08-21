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
        this.length = 1;
    }

    append(val: T): boolean {
        let node = new SingleLinkedListNode(val);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return true;
    }

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
        node.next = this.head;
        this.head = node;
        this.length++;
        return true;
    }

    insert(val: T, index: number): boolean {
        
        //Length validation
        if(index>this.length||index<0) return false;
        //If last index
        if(index===this.length) return !!this.append(val);
        //If first index
        if(index===0) return !!this.prepend(val);

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
        let counter = 0,
            current = this.head;
        while(counter!=index){
            current = current.next;
            counter++;
        }
        return current;
    }

}

let list = new SinglyLinkedList(1);
list.append(2);
list.append(3);
list.insert(2.5,0)
// list.append(4);
// list.prepend(0);
console.log(list.traverse());