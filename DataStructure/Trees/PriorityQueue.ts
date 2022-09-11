enum Priority{
    SEVERE = 1,
    SERIOUS = 2,
    ALARMING = 3,
    MILD = 4,
    COMMON = 5
}

interface IPriorityQueue{
    enqueue(desc:string, priority:Priority):PriorityQueueNode[];
    dequeue():PriorityQueueNode[];
}

class PriorityQueueNode {

    desc:string;
    priority:Priority;

    constructor(desc, priority) {
        this.desc = desc;
        this.priority = priority;
    }
}

class PriorityQueueImpl implements IPriorityQueue{

    private priorityQueue:PriorityQueueNode[] = [];

    constructor(){
        this.priorityQueue=[]
    }

    enqueue(desc: string, priority: Priority): PriorityQueueNode[] {
        let newNode = new PriorityQueueNode(desc, priority);
        
        //Loop and check each priority, if finally found where it should insert, splice it and return the queue
        for (let i=0;i<this.priorityQueue.length;i++) {
            if(newNode.priority<this.priorityQueue[i].priority){
                this.priorityQueue.splice(i,0,newNode);
                return this.priorityQueue;
            }
        }

        //If it's end of loop yet nothing occurs, push it in and return the queue
        this.priorityQueue.push(newNode)
        return this.priorityQueue;
    }

    dequeue(): PriorityQueueNode[]{
        this.priorityQueue.shift();
        return this.priorityQueue;
    }
}

let EmergencyRm = new PriorityQueueImpl();
EmergencyRm.enqueue("common cold", Priority.COMMON);
EmergencyRm.enqueue("gunshot wound", Priority.SEVERE);
EmergencyRm.enqueue("high fever", Priority.ALARMING);
EmergencyRm.enqueue("broken arm", Priority.SERIOUS);
EmergencyRm.enqueue("glass in foot", Priority.MILD);
console.log(EmergencyRm.enqueue("knife stab", Priority.SEVERE));