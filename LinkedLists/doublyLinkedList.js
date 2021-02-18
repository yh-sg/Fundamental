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

    tarverse = () => {
        let current = this.head
        while(current){
            console.log(current.val)
            current = current.next
        }
    }

    reverseTarverse = () => {
        let current = this.tail
        while(current){
            console.log(current.val);
            current = current.prev
        }
    }

    shift = () => {
        if(this.length===0)
            return undefined;
        if(this.length===1){
            this.head=null
            this.tail=null
        }else{
            var shiftHead = this.head
            this.head = shiftHead.next
            this.head.prev = null
            shiftHead.next = null
        }
        this.length--
        return shiftHead
    }

    unshift = (val) => {
        let newNode = new Node(val)
        if(this.length===0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get = (index) => {
        if(index<0||index>=this.length)
            return null
        let current = this.head
        let currentLength = 0
        while(index!=currentLength){
            current = current.next
            currentLength++
        }
        return current
    }

    set = (val, index) => {
        let foundNode = this.get(index)
        if(foundNode!=null){
            foundNode.val = val;
            return this
        }
        return undefined
    }

    insert = (val, index) => {
        if(index<0||index>this.length)
            return undefined
        if(this.length===0)
            return this.unshift(val)
        else if(this.length===index)
            return this.push(val)
        else{
            let newNode = new Node(val)
            let prevNode = this.get(index-1)
            let nextNode = this.get(index)
            prevNode.next = newNode
            newNode.prev = prevNode
            newNode.next = nextNode
            nextNode.prev = newNode
            this.length++
            return this
        }
    }

    remove = (index) => {
        if(index<0||index>=this.length)
            return undefined

        if(index===0)
            return this.shift()
        else if(index=this.length-1)
            return this.pop()
        else if(index=0)
            return this.shift()
        else{
            let removeNode = this.get(index)
            let prevNode = this.get(index-1)
            let nextNode = this.get(index+1)
            removeNode.next = null
            removeNode.prev = null
            prevNode.next = nextNode
            nextNode.prev = prevNode
            this.length--
            return removeNode
        }
    }

}

const DLL = new DoubleLinkedList()
DLL.push(1)

DLL.push(3)
DLL.push(4)
DLL.push(5)
console.log(DLL.unshift(2))
console.log(DLL)

DLL.tarverse()
console.log(DLL)