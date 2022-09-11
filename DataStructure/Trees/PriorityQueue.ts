enum Priority{
    SEVERE = 1,
    SERIOUS = 2,
    ALARMING = 3,
    MILD = 4,
    COMMON = 5
}

interface IPriorityQueue{
    enqueue(desc:string, priority:Priority):PriorityQueueNode[];
}

class PriorityQueueNode {

    protected desc:string;
    protected priority:Priority;

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
        throw new Error("Method not implemented.");
    }
}