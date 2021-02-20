class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push=(val)=>{
        let newNode = new Node(val)
        if(!this.first) this.first=this.last=newNode;

        else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop=()=>{
        if(this.size===0) return null;
        let popVal = this.first;
        if(this.first===this.last)
            this.last = null
        this.first = this.first.next
        this.size--
        return popVal
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue=(val)=>{
        let newNode = new Node(val);
        if(this.first==null) this.first=this.last=newNode;
        else{
            this.last.next=newNode;
            this.last=newNode;
        }
        return ++this.size;
    }

    dequeue=()=>{
        if(!this.first) return null;

        let removedNode = this.first;
        if(this.first==this.last)
            this.last=null
        this.first = this.first.next
        this.size--
        return removedNode
    }
}

let stack = new Stack()
let queue = new Queue()