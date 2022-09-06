interface IBinarySearchTree{
    insert(val:number):void
    lookup(val:number):TreeNode|undefined
    remove(val:number):TreeNode|undefined
}

class TreeNode{

    public left:TreeNode|null;
    public right:TreeNode|null;
    public val:number;

    constructor(val:number){
        this.left=null
        this.right=null
        this.val=val
    }
}

class BinarySearchTreePractice implements IBinarySearchTree{
    public root:TreeNode|null;
    constructor(){
        this.root=null
    }
    insert(val: number): void {
        let newNode = new TreeNode(val);
        if(!this.root){
            this.root=newNode;
            return;
        }

        let current=this.root;

        while(true){
            if(current.val===val) throw new Error("BST should not have node same value"); //if similar value, break

            //compare the node value, if larger goes right, otherwise goes left
            if(val<current.val){
                if(!current.left){
                    current.left=newNode
                    return;
                }else{
                    current=current.left!;
                    continue;
                }
                    
            }
            if(current.val<val){
                if(!current.right){
                    current.right=newNode
                    return;
                }else{
                    current=current.right!;
                    continue;
                } //continue the loop and compare, if it's not null. Otherwise, insert node and exit.   
            }
        } 
    }
    lookup(val: number): TreeNode|undefined {
        if(!this.root) throw new Error("It's an empty tree."); // Check root, if empty throw error

        let current = this.root;

        while(true){

            if(!current) return undefined;

            if(current.val===val) return current;

            if(val<current.val){
                current = current.left!;
                continue;
            }

            if(val>current.val){
                current = current.right!;
                continue;
            }

            else undefined;
        }// compare the node value, if larger goes right, otherwise goes left and continue until it reaches null

    }
    remove(val: number): TreeNode|undefined {
        //!Comments

        // if only one node, remove that. -> Result 1
        // throw error if empty tree -> Result 2
        // Affected nodes: prevNode, removedNode, currentNode(Swapping value and remove linkage)
        // Find removedNode, if cannot find throw error
        // Removed node must always find the higher value first, which is on the right
        // Right side and left side got nothing, destory the previous node linkage -> Result 3
        // left side got something and right side got nothing, remove the linkage of previous node -> Result 4
        // Otherwise, move to right side
        // If left side got nothing, replace the val and destory the removedNode linkage -> Result 5
        // Result 4: go left and if there's left node, keep on looping until the end.
        // replace the value with removedNode and remove it's linkage -> Result 6

        throw new Error("Method not implemented.");
    }
}

interface NodeObject{
    value:number
    left:NodeObject|null
    right:NodeObject|null
}

const traverse = (node:TreeNode):NodeObject => {
    if(!node) throw new Error("No tree to traverse");
    const tree:NodeObject = {value: node.val, left:null, right:null}
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const tree = new BinarySearchTreePractice();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(9))
console.log(tree.lookup(4))
console.log(tree.lookup(6))
console.log(tree.lookup(20))
console.log(tree.lookup(170))
console.log(tree.lookup(15))
console.log(tree.lookup(1))
console.log(tree.lookup(0))

console.log(JSON.stringify(traverse(tree.root!)))

/* 
                9
        4               20
    1       6       15      170
*/



