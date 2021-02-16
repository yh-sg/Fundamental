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

    pop = (val) => {
        if(this.length===0)
            return undefined
        let current = this.head;
        let newTail = current

        //TODO Finish pop!
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
        console.log(current);
        return current
    }

}

let list = new SinglyLinkedList()
list.unshift(77)
list.push(55)
list.push(33)
list.push(44)
list.push(22)