//?What is a linked list?

import { ILinkedListMethods } from "./LinkedList";

//Data Structure that contains a head, tail and length property
//LL consist of nodes, and each node has a value(piece of data) and a pointer(next) to another node or null

//LL(Think of it like a staircase/elevator) vs Array
//Do not have indexes! | Indexed in order!
//Connected via nodes with a next pointer
//Random access is not allowed | Can Quickly be accessed at a specific index

type TSingleLinkedListNode<T> = SingleLinkedListNode<T|undefined>|null;

export class SingleLinkedListNode<T> {
    public val: T;
    public next: TSingleLinkedListNode<T>;
    constructor(data: T) {
        this.val = data;
        this.next = null;
    }
}

class SinglyLinkedList<T> implements ILinkedListMethods<T>{

    //head, tail and length property
    protected head: TSingleLinkedListNode<T>;
    protected tail: TSingleLinkedListNode<T>;
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
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
        return true;
    } //deal with tail

    traverse(): T[] {
        let current = this.head;
        let arr:T[] = [];
        if(this.length===0)
            return [];
        while(current){
            arr.push(current.val!);
            current = current.next!;
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
            nextNode = previousNode!.next;

        previousNode!.next = node;
        node.next = nextNode;
        this.length++;
        
        return true;
    }
    
    get(index: number):TSingleLinkedListNode<T> {
        if(index<0||index>=this.length) //index validation
            return null;
        let counter = 0,
            current = this.head;
        while(counter!=index&&current!=null){
            current = current.next!;
            counter++;
        }
        return current;
    }
    
    shift(): boolean {
        if(this.length<=0) //length validation
            return false;

        if(this.length===1){ //Handle 1 element
            this.head=null;
            this.tail=null;
        }else{
            let futureHead = this.get(1);
            this.head!.next = null;
            this.head=futureHead;
        } //!handle head
        this.length--;
        return true;
    }

    pop(): boolean {
        if(this.length<=0) //length validation
            return false;

        if(this.length===1){ //Handle 1 element
            this.head=null;
            this.tail=null;
        }else{
            let futureTail = this.get(this.length-2);
            futureTail!.next = null;
            this.tail=futureTail;
        } //!handle tail  
        this.length--;
        return true;
    }

    remove(index: number): boolean {
        if(index>=this.length||index<0) //length & index validation 
            return false; 

        if(index==0) //Handle 0 index
            return this.shift(); 
        
        if(this.length==1){ //Handle 1 element
            this.head=null;
            this.tail=null;
        }else{
            //Get removednode, previous and afternode.
            let previousNode = this.get(index-1),
                removedNode = previousNode!.next,
                AfterNode = removedNode!.next;
                removedNode!.next=null;
                previousNode!.next=AfterNode;
        }
        this.length--;
        return true;
    }

    set(val: T, index: number): boolean {
        let searchNode = this.get(index)
        console.log(searchNode)
        if(!searchNode)
            return false;
        else
            searchNode.val=val;
        return true;
    }

    reverse(): T[] {

        if(this.length<=0)
            return [];

        // Temp variables - prev, next and node
        let node = this.head,
            prev:TSingleLinkedListNode<T> = null,
            next:TSingleLinkedListNode<T> = null;

        // Get new head and tail
        this.head = this.tail;
        this.tail = node;

        //loop through the whole length of LL
        for (let i = 0; i < this.length; i++) {
            next = node!.next; //First step is to store the next node on next variable
            node!.next = prev; //Next step is to destroy the node linkage by pointing to previous node 
            prev = node; //update previous node
            node = next //update node
        }

        return this.traverse();
    }

}

let list = new SinglyLinkedList();
list.append(1);
list.prepend(0);
list.append(2);
list.append(3);
list.insert(2.5,3);
list.insert(3.5,5);
list.set(99,5);
list.reverse();
console.log(list.traverse());