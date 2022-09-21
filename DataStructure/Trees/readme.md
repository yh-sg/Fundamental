# Trees

Tree represents the nodes connected by edges. A tree consist of root on level 0, parent node and child node. It's a non-linear and a hierarchical data structure

1. Binary Search Tree: It is a type of tree data structure that helps in maintaining a sorted stream of data.  
2. Heap: It is also a tree data structure that can be represented in a form of an array. It is used to implement priority queues.  
3. Trie: It is a fast and efficient way for dynamic spell checking. It is also used for locating specific keys from within a set.  

## Binary Search Tree

A node of a binary tree can have a maximum of two child nodes. The value of the left node is less than its parent, while the value of the right node is greater than its parent.

The basic operations that can be performed on a binary search tree data structure, are:
- Insert
- Search
- Preorder Traversal − Traverses a tree in a pre-order manner.
- Inorder Traversal − Traverses a tree in an in-order manner.
- Postorder Traversal − Traverses a tree in a post-order manner.

### Performance

<table>
    <thead>
        <tr>
            <th></th>
            <th>Balanced BST</th>
            <th>Unbalanced BST</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Insert</td>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <td>Delete</td>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <td>Lookup</td>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>

## Pros and Cons
```diff
+ Better than O(n)
+ Ordered
+ Flexible Size
- No O(1) operations
```

---

## Binary Heap

There're min-heap and max-heap. Unlike binary search tree, left and right doesn't have meaning as long as they are lesser/greater than the top.

Why Binary heap? 
- Maximum or Minimum Element: O(1)
- For Max heap, parent nodes are always larger than child nodes. Largest value on the root node
- For Min heap, parent nodes are always smaller than child nodes. Smallest value on the root node

### Performance

<table>
    <tbody>
        <tr>
            <td>Insert</td>
            <td>O(log n)</td>
        </tr>
        <tr>
            <td>Delete</td>
            <td>O(log n)</td>
        </tr>
        <tr>
            <td>Lookup</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>

## Pros and Cons
```diff
+ Better than O(n)
+ Priority(Priority queue)
+ Flexible Size
+ Fast Insert
- Slow Lookup
```

---

Trie?

## Links
[Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)