# Stack

- LIFO(Last in, first out): Most recently added object is the first to be removed. 
    - Usually requires only 1 pointer 'top' to access the list. 'Bottom' can be added for 'Lookup'
- Stack is used in solving problems works on recursion.	Can be considered as a vertical collection visual. 

# Queue

- FIFO(First in, first out): The first added object is the first to be removed. 
    - Requires two pointers, front for first insert and rear for last insert
- Queue is used in solving problems having sequential processing. Can be considered as a horizontal collection visual.
- Due to FIFO, it'll not be good to implement in array since removal causes it to drop performance...

## Time Complexity

<table>
    <tbody>
        <tr>
            <td>Insert</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <td>Remove</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <td>Peek</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <td>Lookup</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>

## Pros and Cons

```diff
+ Fast Operation
+ Fast peek
+ Ordered
- Slow Lookup
```

## Links:

[232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)