class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null;
        this.length = 0;
    }

    push = (val) =>{
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
        return this
    }
}

const DLL = new DoubleLinkedList()
console.log(DLL.push(1))
console.log(DLL.push(2))
console.log(DLL.push(3))
console.log(DLL.push(4))
console.log(DLL.push(5))
console.log(DLL);