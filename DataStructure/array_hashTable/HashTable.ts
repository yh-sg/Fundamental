interface IHashTable{
    set(key:string,value:string): void;
    get(key:string): string|undefined;
    values(): string[];
    keys(): string[];
}

class HashTableImpl implements IHashTable{

    private keyMap:Array<string[][]>;

    constructor(size=4){
        this.keyMap = new Array(size);
    }

    //hash function
    private hash(key:string){
        let total = 0;
        let PRIME = 31; //to prevent the frequency of the same number
        for(let i=0;i<Math.min(key.length,50);i++){ //o(1)
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    //uses separate chaining method for collisions
    set(key:string,value:string){
        let index = this.hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,value]);
    }
    
    get(key:string){
        let index = this.hash(key);
        if(this.keyMap[index]){
            for (const ele of this.keyMap[index]) {
                if(ele[0]===key)
                    return ele[1];
            }
        }
        return undefined
    }

    values(){
        let valuesArr:string[] = [];
        for (const map of this.keyMap) {
            if(map){
                for (const element of map) {
                    if(!valuesArr.includes(element[1])) //handle duplicate values
                        valuesArr.push(element[1])           
                }
            }
        }
        return valuesArr
    }

    keys(){
        let keysArr:string[] = [];
        for (const map of this.keyMap) {
            if(map){
                for (const element of map) {
                    if(!keysArr.includes(element[0])) //handle duplicate values
                        keysArr.push(element[0])            
                }
            }
        }
        return keysArr
    }
}

let hastTable = new HashTableImpl();
hastTable.set("maroon","#800000")
hastTable.set("yellow","#FFFF00")
hastTable.set("olive","#808000")
hastTable.set("salmon","#FA8072")
hastTable.set("lightcoral","#F08080")
hastTable.set("mediumvioletred","#C71585")
hastTable.set("plum","#DDA0DD")
hastTable.set("plum","#DDA0DD")
console.table(hastTable)