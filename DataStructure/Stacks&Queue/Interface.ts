import { NODE } from "./stacksAndQueue";

interface ICommonMethod<T>{
    isEmpty():boolean;
    peek():T | undefined ;
    traverse():T[];
}

export interface IStack<T> extends ICommonMethod<T>{
    push(val:T):void;
    pop():void;
}

export interface IQueue<T> extends ICommonMethod<T>{
    enqueue(val:T):void;
    dequeue():void;
}