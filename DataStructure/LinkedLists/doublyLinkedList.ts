import { ILinkedListMethods } from "./ILinkedListMethods";
import { SingleLinkedListNode } from "./linkedList";

// Two pointers and val
export class DoubleLinkedListNODE<T> extends SingleLinkedListNode<T> {
  protected prev: DoubleLinkedListNODE<T>|null = null;
  constructor(data: T) {
      super(data);
  }
}

class DoubleLinkedList<T> implements ILinkedListMethods<T>{
    //head, tail and length property
    protected head: DoubleLinkedListNODE<T>;
    protected tail: DoubleLinkedListNODE<T>;
    protected length: number;
    // must have a value
    constructor(val:T){
        let node = new DoubleLinkedListNODE(val);
        this.head = node;
        this.tail = node;
    }
  append(val: T): boolean {
    throw new Error("Method not implemented.");
  }
  traverse(): [] {
    throw new Error("Method not implemented.");
  }
  prepend(val: T): boolean {
    throw new Error("Method not implemented.");
  }
  insert(val: T, index: number): void {
    throw new Error("Method not implemented.");
  }
  get(index: number): DoubleLinkedListNODE<T> | SingleLinkedListNode<T> {
    throw new Error("Method not implemented.");
  }

}

const DLL = new DoubleLinkedListNODE(1);
