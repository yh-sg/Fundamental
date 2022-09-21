type UpperCaseCharacter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' ;
type LowercaseCharacter = Lowercase<UpperCaseCharacter>
type Character = UpperCaseCharacter | LowercaseCharacter;
type Numeric = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'


interface IGraph<T>{
    addVertex(vertex:T):void;
    removeVertex(vertex:T):void;
    addEdge(vertex1:T, vertex2:T):void;
    removeEdge(vertex1:T, vertex2:T):void;
    showConnections():void;
}

let answer = ['1: 3,2,9','2: 4,1,9','3: 1,4','4: 3,2,5','5: 4,6','6: 5','9: 1,2']

class Graph implements IGraph<Numeric>{

    private adjacentList:{ [key in Numeric]?: Numeric[] };
    private numberOfNodes:number;

    constructor(){
        this.adjacentList={};
        this.numberOfNodes=0;
    }

    addVertex(vertex: Numeric): void {
        //only need to check if these's key or not, if there is exit else add.
        if(!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = [];
            this.numberOfNodes++;
        }
    }
    removeVertex(vertex: Numeric): void {
        //if no vertex, throw error
        if(!this.adjacentList[vertex]) {
            throw new Error("No such vertex to remove");
        }

        //loop through all it's edges, remove one by one
        while(this.adjacentList[vertex]?.length){
            let removingVertexEdge = this.adjacentList[vertex]?.pop();
            this.removeEdge(vertex, removingVertexEdge!);
        }

        //delete vertex
        delete this.adjacentList[vertex];
    }
    addEdge(vertex1: Numeric, vertex2: Numeric): void {
        //Check got both keys or not, if not throw error
        if(!this.adjacentList[vertex1]||!this.adjacentList[vertex2])
            throw new Error("Either one of the vertex is invalid");
        
        //Else connect them together, remove all the duplicates using set
        this.adjacentList[vertex1]!.push(vertex2);
        this.adjacentList[vertex2]!.push(vertex1);

        this.adjacentList[vertex1] = [...new Set(this.adjacentList[vertex1])];
        this.adjacentList[vertex2] = [...new Set(this.adjacentList[vertex2])];
    }

    removeEdge(vertex1: Numeric, vertex2: Numeric): void {
        this.adjacentList[vertex1] = this.adjacentList[vertex1]?.filter(v => v !== vertex2);
        this.adjacentList[vertex2] = this.adjacentList[vertex2]?.filter(v => v !== vertex1);
    }

    showConnections(): void {
        //get the list of keys, loop it
            //every loop, get the values

        //! Or just use entries and destruct the key-value pairs
        // let i = 0;
        // for (const [key, value] of Object.entries(this.adjacentList)) {
        //     let keyValuePairs = `${key}: ${value}`,
        //         errMsg = `the values are is not same --> answer:${answer[i]}`
        //     console.log(keyValuePairs);
        //     console.assert(keyValuePairs===answer[i], errMsg)
        //     i++;
        // }

        //Or simply just console table
        console.table(this.adjacentList)

        console.log(`Total nodes-> ${this.numberOfNodes}`);

    }

}

const myGraph = new Graph();
myGraph.addVertex('9');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '9'); 
myGraph.addEdge('9', '2'); 
myGraph.addEdge('9', '2');  //duplicate
myGraph.addEdge('6', '5');

console.log(myGraph.showConnections()); 

myGraph.removeVertex('9');

console.log(myGraph.showConnections()); 