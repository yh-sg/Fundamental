# Data Structure
---
## Object and array
---
## 1. Object

- Unordered, key value pairs!
- Used when there is no need of any ordering.
- Time Complexity:
    - Insert: O(1)
    - Remove: O(1)
    - Search: O(N)
    - Access: O(1)
- Time Complexity(Methods):
    - Object.keys: O(N)
    - Object.values: O(N)
    - Object.entries: O(N)
    - hasOwnProperty: O(1)
## 2. Array
---
- Storing of multiple values in a single variable
- Time Complexity:
    - Insert: Depends..
    - Remove: Depends..
    - Search: O(N)
    - Access: O(1)
---
## Linked List
---
- A Linked List is a linear collection of data elements(nodes). Using pointer, each node points to the next node. These group of nodes together represent a sequence.
- Excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
- SLL: Linked list which each nodes points to the next node, whereas the last node is null.
- DLL: Similar to SLL but with 2 pointers which traget next and previous node.(Take up more memory due to extra pointer)
- CLL: Last Node point back to first node
- Time Complexity:
    - Insert: O(1)
    - Remove: Depends..O(1) or O(N)
    - Search: O(N)
    - Access: O(N)
---


---
## Binary Tree
---

- A **Tree** is an connected and undirected graph
- A binary Tree is where each node have at most two children(Left/Right Child)
- ?

---
### Binary Search Tree(BST)
---
- A type of Binary Tree which each node must have lesser/equal value store in left child while right child having greater/equal value.
- Time Complexity:
    - Insert: O(log(n))
    - Remove: O(log(n))
    - Search: O(log(n))
    - Access: O(log(n))

### Trie?
### Fenwick tree?
### Segment tree?

---
### Heap
---
- Similar to BST, but with different rules.
    - For Max heap, parent nodes are always larger than child nodes. Largest value on the root node
    - For Min heap, parent nodes are always smaller than child nodes. Smallest value on the root node
- Time Complexity:
    - Insert: O(log(n))
    - Remove: O(log(n))
    - Search: O(n)
    - Access(Max/Min): O(1)