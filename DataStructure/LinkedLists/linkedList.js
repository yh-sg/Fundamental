//?What is a linked list?

//DS that contains a head, tail and length property
//LL consit of nodes, and each node has a value and a pointer to another node or null

//LL(Think of it like a staircase/elevator) vs Array
//Do not have indexes! | Indexed in order!
//Connected via nodes with a next pointer | Insertion and deletion can be exp(Due to changes of index)
//Random access is not allowed | Can Quickly be accessed at a specific index

/*========================================================================================================*/

// piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push = (val) => {
        let newNode = new Node(val); //Create a new node
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode; //new Node(val)
            this.tail = newNode;
        } 
        this.length++;
        return this;
    } 

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    pop = () => {
        if(this.length===0)
            return undefined
        let current = this.head;
        let newTail = current
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail=newTail;
        this.tail.next = null
        this.length--;
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        return this;
    }

    shift = () => {
        if(this.length===0)
            return undefined
        let currentHead = this.head
        this.head = this.head.next
        // console.log(this.head)
        this.length--
        if(this.length==0){
            this.tail = null
        }
        return currentHead
    }

    unshift = (val) => {
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get = (index) => {
        if(index<0 || index >= this.length)
            return null
        let counter = 0
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        // console.log(current);
        return current
    }

    set = (val, index) =>{
        let foundNode = this.get(index);
        if(this.get(index)===null)
            return false;
        else{
            foundNode.val = val;
            return true;
        }
    }

    insert = (val, index) => {
        if(index<0 || index>this.length)
            return false;
        if(index===this.length)
            return !!this.push(val);
        if(index===0)
            return !!this.unshift(val);
        
        const prevNode = this.get(index - 1);
        const newNode = new Node();
        newNode.val = val;
        newNode.next = this.get(index);
        prevNode.next = newNode;
        this.length++
        return true;
    }

    remove = (index) => {
        if(index<0 || index>this.length)
            return undefined;
        if(index===0)
            return this.shift()
        if(index===this.length-1)
            return this.pop()
        const prevNode = this.get(index-1)
        const removed = prevNode.next
        prevNode.next = this.get(index+1)
        this.length--
        return removed
    }

    reverse = () => {
        let node = this.head
        this.head = this.tail
        this.tail = node;
        let next=null,
            prev=null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev
            prev = node
            node = next
        }
        return this.traverse();
    }

}

let list = new SinglyLinkedList()
list.push(2)
list.unshift(1)
list.push(3)
list.push(4)
list.push(5)
list.insert(3.5, 3)
console.log(list.remove(3))
list.traverse()