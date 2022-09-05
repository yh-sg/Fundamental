# Linked List

- A Linked List is a linear collection of data elements(nodes). Using pointer, each node points to the next node. These group of nodes together represent a sequence.
- Excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
- SingleyLinkedList: Linked list which each nodes points to the next node, whereas the last node is null.
- DoublyLinkedList: Similar to SLL but with 2 pointers which traget next and previous node.(Take up more memory due to extra pointer)
- CircleLinkedList: Last Node point back to first node

Related to trees and graphs

## Performance

### Time

Linked lists have most of their benefit when it comes to the insertion and deletion of nodes in the list. Unlike the dynamic array, insertion and deletion at any part of the list takes constant time.

However, unlike dynamic arrays, accessing the data in these nodes takes linear time because of the need to search through the entire list via pointers. It's also important to note that there is no way of optimizing search in linked lists. In the array, we could at least keep the array sorted. However, since we don't know how long the linked list is, there is no way of performing a binary search:

<table>
    <tbody>
        <tr>
            <td>Insert</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <td>Delete</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <td>Access</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <td>Search</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>

### Space

Linked lists hold two main pieces of information (the value and pointer) per node. This means that the amount of data stored increases linearly with the number of nodes in the list. Therefore, the space complexity of the linked list is linear:

**O(n)**

## Pros and Cons

```diff
+ Fast Insertion
+ Fast Deletion
+ Ordered
+ Flexible Size
- Slow Lookup
- More Memory
```