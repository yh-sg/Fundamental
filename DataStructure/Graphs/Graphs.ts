type UpperCaseCharacter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' ;
type LowercaseCharacter = Lowercase<UpperCaseCharacter>
type Character = UpperCaseCharacter | LowercaseCharacter;
type Numeric = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'


interface IGraph<T>{
    addVertex(vertex:T):void;
    removeVertex(vertex:T):boolean;
    addEdge(vertex1:T, vertex2:T):void;
    removeEdge(vertex1:T, vertex2:T):boolean;
    showConnections():void;
}


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
    removeVertex(vertex: Numeric): boolean {
        throw new Error("Method not implemented.");
    }
    addEdge(vertex1: Numeric, vertex2: Numeric): void {
        //Check got both keys or not, if not throw error
        if(!this.adjacentList[vertex1]&&!this.adjacentList[vertex2])
            throw new Error("Either one of the vertex is invalid");
        
        //Else connect them together, remove all the duplicates using set
        this.adjacentList[vertex1]!.push(vertex2);
        this.adjacentList[vertex2]!.push(vertex1);

        this.adjacentList[vertex1] = [...new Set(this.adjacentList[vertex1])];
        this.adjacentList[vertex2] = [...new Set(this.adjacentList[vertex2])];
    }
    removeEdge(vertex1: Numeric, vertex2: Numeric): boolean {
        throw new Error("Method not implemented.");
    }
    showConnections(): void {
        //get the list of keys, loop it
        //every loop, get the values

        // Or just use entries and destruct the key-value pairs
        for (const [key, value] of Object.entries(this.adjacentList)) {
            console.log(`${key}: ${value}`);
          }
    }

}

const myGraph = new Graph();
myGraph.addVertex('0');
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
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('0', '2');  //duplicate
myGraph.addEdge('6', '5');

console.log(myGraph.showConnections()); 

//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5