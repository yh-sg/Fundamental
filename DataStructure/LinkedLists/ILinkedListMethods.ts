import { DoubleLinkedListNODE } from "./doublyLinkedList";
import { SingleLinkedListNode } from "./linkedList";

// Methods
// append: add a new node at the beginning — O(1)
// traverse: go through the whole linked list - O(n)
// prepend: add a new node at the end — O(1)
// insert: add a new node at a specific position — O(n)
// get: get the node by its index — O(n)
// shift: get and remove the very first node — O(1)
// pop: get and remove the very last node — O(1)
// set: set the value of a node by its index — O(n)
// remove: remove a node at a specific position — O(n)
// reverse: reverse the whole linked list - O(n)

export interface ILinkedListMethods<T>{
    append(val: T):boolean;
    traverse():T[];
    prepend(val:T):boolean
    insert(val:T, index:number):void
    get(index:number):SingleLinkedListNode<T>|DoubleLinkedListNODE<T>;
    shift():boolean
    pop():boolean
    set(val:T):boolean
    remove(val:T, index:number):void
    reverse?():T[]
}