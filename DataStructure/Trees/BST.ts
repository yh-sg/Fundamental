interface IBinarySearchTree{
    insert(val:number):void
    lookup(val:number):void
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
        throw new Error("Method not implemented.");
    }
    lookup(val: number): void {
        throw new Error("Method not implemented.");
    }
    remove(val: number): void {
        throw new Error("Method not implemented.");
    }
}

interface NodeObject{
    value:number
    left:NodeObject|null
    right:NodeObject|null
}

const traverse = (node:TreeNode):NodeObject => {
    const tree:NodeObject = {value: node.val, left:null, right:null}
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}