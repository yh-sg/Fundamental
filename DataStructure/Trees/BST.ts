interface IBinarySearchTree{
    insert(val:number):void
    lookup(val:number):TreeNode|undefined
    remove(val:number):void
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
    remove(val: number): void {

        if(this.root&&!this.root.left&&!this.root.right&&this.root.val===val){
            this.root=null;
            return;
         } // if only one node, remove that.

        if(!this.root) throw new Error("It's an empty tree."); // throw error if empty tree

        //Affected nodes: prevNode, removedNode, currentNode(Swapping value and remove linkage)
        let removedNode = this.root,
            prevNode,
            currentNode;

        while(removedNode){
            if(val<removedNode.val){
                prevNode=removedNode;
                removedNode=removedNode.left!;
            }else if(val===removedNode.val){
                break;
            }else{
                prevNode=removedNode;
                removedNode=removedNode.right!;
            }
        }

        if(!removedNode) throw new Error("Unable to find delete node!"); //founded node, if cannot find throw error

        // Removed node must always find the higher value first, which is on the right
        if(!removedNode.right&&!removedNode.left){
            (!prevNode.left || removedNode.val === prevNode.left.val)  ?  prevNode.left = null : prevNode.right = null;
            return;
        }// Result 1: right side and left side got nothing, destory the previous node linkage 
        
        if(!removedNode.right&&removedNode.left){
            //handle root node
            if(removedNode===this.root){
                this.root=removedNode.left
                removedNode.left=null
            }else
                prevNode.left = removedNode.left
            return;
        }// Result 2: left side got something and right side got nothing, remove the linkage of previous node

        // move to right side
        currentNode=removedNode.right
        if(!currentNode.left){
            removedNode.val=currentNode.val;
            removedNode.right=null;
            return
        } // Result 3: if left side got nothing, replace the val and destory the removedNode linkage

        // Result 4: go left and if there's left node, keep on looping until the end.replace the value with removedNode and remove it's linkage
         while(currentNode){
            if(!currentNode.left) break;
            prevNode=currentNode;
            currentNode=currentNode.left;
         }
         removedNode.val=currentNode.val;
         prevNode.left=null;

         return;
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
tree.remove(9)
tree.remove(4)
tree.remove(6)
tree.remove(20)
tree.remove(170)
tree.remove(15)
// tree.remove(1)


console.log(JSON.stringify(traverse(tree.root!)))

/* 
                9
        4               20
    1       6       15      170
*/



