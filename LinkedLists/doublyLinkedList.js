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

    pop = () => {
        if(!this.head)
            return undefined
        const popNode = this.tail
        if(this.length===1){
            this.head=null
            this.tail=null
        }else{
            this.tail = popNode.prev
            this.tail.next = null
            popNode.prev = null //sever ties 
        }

        this.length--;
        return popNode
    }
}

const DLL = new DoubleLinkedList()
DLL.push(1)
DLL.push(2)
DLL.push(3)
DLL.push(4)
DLL.push(5)
console.log(DLL.pop());
console.log(DLL);