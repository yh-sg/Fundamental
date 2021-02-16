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
        if(length===0)
            return undefined
        let current = this.head;
        let newTail = current

        //TODO Finish pop!

        this.length--;
        return this;
    }

}

let list = new SinglyLinkedList()
console.log(list);
console.log(list.push(99));
console.log(list.push(80));
console.log(list.push(55));
console.log(list.push(44));
list.traverse();