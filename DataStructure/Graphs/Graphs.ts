interface IGraph<T>{
    addVertex(vertex:T):boolean;
    removeVertex(vertex:T):boolean;
    addEdge(vertex1:T, vertex2:T):boolean;
    removeEdge(vertex1:T, vertex2:T):boolean;
    showConnections():void;
}

type UpperCaseCharacter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' ;
type LowercaseCharacter = Lowercase<UpperCaseCharacter>
type Character = UpperCaseCharacter | LowercaseCharacter;

class Graph implements IGraph<Character>{
    addVertex(vertex: Character): boolean {
        throw new Error("Method not implemented.");
    }
    removeVertex(vertex: Character): boolean {
        throw new Error("Method not implemented.");
    }
    addEdge(vertex1: Character, vertex2: Character): boolean {
        throw new Error("Method not implemented.");
    }
    removeEdge(vertex1: Character, vertex2: Character): boolean {
        throw new Error("Method not implemented.");
    }
    showConnections(): void {
        throw new Error("Method not implemented.");
    }

}