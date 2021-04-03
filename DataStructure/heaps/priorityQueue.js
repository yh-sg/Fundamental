//Using min binary heaps logic

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.arr = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.arr.push(newNode);

    let index = this.arr.length - 1;
    const element = this.arr[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.arr[parentIndex];

      if (element.priority >= parent.priority) break;

      this.arr[parentIndex] = element;
      this.arr[index] = parent;
      index = parentIndex;
    }
  }
}

let EmergencyRm = new PriorityQueue();
EmergencyRm.enqueue("common cold", 5);
EmergencyRm.enqueue("gunshot wound", 1);
EmergencyRm.enqueue("high fever", 4);
EmergencyRm.enqueue("broken arm", 2);
EmergencyRm.enqueue("glass in foot", 3);
