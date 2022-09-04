import { ILinkedListMethods } from "./LinkedList";

type TDoubleLinkedListNode<T> = DoubleLinkedListNode<T|undefined>|null;

// Two pointers and val
export class DoubleLinkedListNode<T> {
  public val: T;
  public prev: TDoubleLinkedListNode<T>;
  public next: TDoubleLinkedListNode<T>;
  constructor(data: T) {
    this.val = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList<T> implements ILinkedListMethods<T>{
    //head, tail and length property
    protected head: TDoubleLinkedListNode<T>;
    protected tail: TDoubleLinkedListNode<T>;
    length: number;
    // must have a value
    constructor(val?:T){
      this.head = new DoubleLinkedListNode(val) ?? null;
      this.tail = new DoubleLinkedListNode(val) ?? null;
      this.length = val ? 1 : 0;
    }

  append(val: T): boolean {
    let node = new DoubleLinkedListNode(val);
    if(this.length===0){
      this.head=node;
      this.tail=node;
    }else{
      node.prev=this.tail;
      this.tail!.next=node;
      this.tail=node;
    }
    this.length++;
    return true;
  }

  traverse(): T[] {
    let current = this.head,
      arr:T[] = [];
    if(this.length===0)
      return arr;
    while(current){
      arr.push(current.val!)
      current = current.next;
    }
    return arr;
  }

  prepend(val: T): boolean {
    let node = new DoubleLinkedListNode(val);
    if(this.head===null){
      this.head=node;
      this.tail=node;
    }else{
      this.head.prev=node;
      node.next=this.head;
      this.head=node;
    }
    this.length++;
    return true;
  }

  insert(val: T, index: number): void {
    throw new Error("Method not implemented.");
  }

  get(index: number): TDoubleLinkedListNode<T> {
    let node=this.head,
      current=0;

    if(index<0||index>=this.length)
      return null;

    while(current!=index&&node!=null){
      node=node.next!;
      current++;
    }
    
    return node;
    
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

const DLL = new DoubleLinkedList();
DLL.append(1)
DLL.append(2)
DLL.append(3)
DLL.prepend(0)
DLL.append(4)
DLL.append(5)

console.log(DLL.traverse())
console.log(DLL.get(1))
console.log(DLL.get(-1))
console.log(DLL.get(7))
console.log(DLL.get(6))
console.log(DLL.get(5))