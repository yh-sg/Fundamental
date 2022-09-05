
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