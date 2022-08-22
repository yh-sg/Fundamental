import { ILinkedListMethods } from "./LinkedList";
import { SingleLinkedListNode } from "./SinglyLinkedListImpl";

// Two pointers and val
export class DoubleLinkedListNode<T> extends SingleLinkedListNode<T> {
  protected prev: DoubleLinkedListNode<T>|null = null;
  constructor(data: T) {
      super(data);
  }
}

class DoubleLinkedList<T> implements ILinkedListMethods<T>{
    //head, tail and length property
    protected head: DoubleLinkedListNode<T>;
    protected tail: DoubleLinkedListNode<T>;
    protected length: number;
    // must have a value
    constructor(val?:T){
      this.head = new DoubleLinkedListNode(val) ?? null;
      this.tail = new DoubleLinkedListNode(val) ?? null;
      this.length = val ? 1 : 0;
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
  get(index: number): DoubleLinkedListNode<T> | SingleLinkedListNode<T> {
    throw new Error("Method not implemented.");
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
  remove(index: number): void {
    throw new Error("Method not implemented.");
  }
  reverse(): T[] {
    throw new Error("Method not implemented.");
  }

}

const DLL = new DoubleLinkedList(1);
