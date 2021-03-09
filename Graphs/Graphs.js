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

    dfsRecursive(start){
        const result = [],
        visited = {},
        adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour)
                }
            });
        })(start);

        return result;
    }

     dfsIterative(start){
        const stack = [start],
        result = [],
        visited = {};
        let currentVertax;

        visited[start] = true;
        while(stack.length){
            console.log(stack);
            currentVertax = stack.pop();
            result.push(currentVertax);

            this.adjacencyList[currentVertax].forEach(neighbour=> {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            })
            
        }
        return result;
     }
}

let g = new Graph()
// g.addVertex("Fukuoka")
// g.addVertex("Saga")
// g.addVertex("Kagoshima")
// g.addVertex("Kumamoto")
// g.addVertex("Oita")
// g.addVertex("Miyazaki")
// g.addVertex("Nagasaki")
// g.addEdge("Fukuoka", "Saga")
// g.addEdge("Fukuoka", "Kumamoto")
// g.addEdge("Kumamoto", "Kagoshima")
// g.addEdge("Fukuoka", "Oita")
// g.addEdge("Kumamoto", "Oita")
// g.addEdge("Miyazaki", "Kagoshima")
// g.addEdge("Miyazaki", "Kumamoto")
// g.addEdge("Miyazaki", "Oita")
// g.addEdge("Nagasaki", "Saga")

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F