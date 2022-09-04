import { IDoublyLinkedListMethods } from "./LinkedList";

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

class DoubleLinkedList<T> implements IDoublyLinkedListMethods<T>{
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

  reverseTraverse(): T[] {
    let current = this.tail,
    arr:T[] = [];
    if(this.length===0)
      return arr;
    while(current){
      arr.push(current.val!)
      current = current.prev;
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

  insert(val: T, index: number): boolean {
    if(index===0) return this.prepend(val);
    if(index<0||index>this.length) return false;
    if(index===this.length) return this.append(val);
    let currentNode = new DoubleLinkedListNode(val),
      prevNode = this.get(index-1),
      nextNode = this.get(index);

    prevNode!.next=currentNode;
    nextNode!.prev=currentNode;
    currentNode.next = nextNode;
    currentNode.prev = prevNode;
    this.length++;
    return true;

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
    if(this.head===null) return false;

    if(this.length===1){
      this.head=null;
      this.tail=null;
    }else{
      let futureHead = this.get(1);
      this.head.next=null;
      futureHead!.prev=null;
      this.head=futureHead;
    }
    this.length--;
    return true;
  }

  pop(): boolean {
    if(this.tail===null) return false;

    if(this.length===1){
      this.head=null;
      this.tail=null;
    }else{
      let futureTail = this.get(this.length-2);
      this.tail.prev=null;
      futureTail!.next=null;
      this.tail=futureTail;
    }
    this.length--;
    return true;
  }

  set(val: T, index: number): boolean {
    let searchNode=this.get(index)
    return searchNode ? !!(searchNode.val=val) : false;
  }

  remove(index: number): boolean {
    if(index===0) return this.shift();
    if(index<0||index>=this.length) return false;
    if(index===this.length-1) return this.pop();

    let currentNode=this.get(index),
        prevNode=this.get(index-1),
        nextNode=this.get(index+1);

    currentNode!.next=null;
    currentNode!.prev=null;
    prevNode!.next=nextNode;
    nextNode!.prev=prevNode;

    this.length--;
    return true;
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
DLL.insert(-1, 0);
DLL.insert(6, 7);
DLL.insert(99, 20);
DLL.insert(-100, -1);
DLL.insert(2.5, 3);
DLL.pop();
DLL.shift();
