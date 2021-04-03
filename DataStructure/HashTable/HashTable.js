class HashTable{
    constructor(size=4){
        this.keyMap = new Array(size);
    }

    //hash function
    _hash(key){
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
    set(key,value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,value]);
    }
    
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0]===key)
                    return this.keyMap[index][i][1];
            }
        }
        return undefined
    }

    values(){
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) //handle duplicate values
                        valuesArr.push(this.keyMap[i][j][1])           
                }
            }
        }
        return valuesArr
    }

    keys(){
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0])) //handle duplicate values
                    keysArr.push(this.keyMap[i][j][0])            
                }
            }
        }
        return keysArr
    }
}

let ht = new HashTable();
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("plum","#DDA0DD")
console.table(ht)