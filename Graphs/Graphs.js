//*Undirected graph, adjacencyList
class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return vertex
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

     removeVertex(vertex){
         while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph()
g.addVertex("Fukuoka")
g.addVertex("Saga")
g.addVertex("Kagoshima")
g.addVertex("Kumamoto")
g.addVertex("Oita")
g.addVertex("Miyazaki")
g.addVertex("Nagasaki")
g.addEdge("Fukuoka", "Saga")
g.addEdge("Fukuoka", "Kumamoto")
g.addEdge("Kumamoto", "Kagoshima")
g.addEdge("Fukuoka", "Oita")
g.addEdge("Kumamoto", "Oita")
g.addEdge("Miyazaki", "Kagoshima")
g.addEdge("Miyazaki", "Kumamoto")
g.addEdge("Miyazaki", "Oita")
g.addEdge("Nagasaki", "Saga")