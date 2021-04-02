//Weighted graph
//E.g. "A": [{node: "B", weight: 10}]

//1.Everytime before visit a new node, pick the node with smallest known distance to visit first
//2.Once moved to the node that's going to visit, look at each of tis neighbours
//3.For each neighboring node, calculate the distance by summing the total edges that lead to the node we're checking from the starting node
//4.If the new total disance to a node is less than previous total, store the new shorter disance for that node.

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);
let q = new PriorityQueue();
q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("A", 20);
