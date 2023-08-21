# Recursion

Rules:
1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually requires 2 return for recursive and base case.
    - After recursion is done, it will be remove from the call stack one by one. Require to bubble up to the top to return the base case.
    - E.g. 4 occurance of function -> recursion();
        - Invoked 4 times recursion(recursion(recursion(recursion('Done'))));
        - Bubble up to the base recursion function to return 'Done'

## Stack Overflow

When CPU program tries to use more memory space in the call stack than has been allocated to the call stack that stores local function variables and return address data during program execution. 

The call stack adheres to a ***(LIFO) memory queue architecture***. When a function is called, the function's stack frame is added to the top of the call stack. The stack frame will remain in memory until the function is finished executing. The stack frame is then dropped from the stack, freeing up memory for other stack frames.

If it demands more memory than is available in the call stack, a stack overflow occurs, which crashes the entire system.

##### How does it occur?

Recursion(Where function is called too many times) or too much data is assigned to the variables in the stack frame like array variables. If there's no logic to prevent excess data from being written array variable, it will cause stack overflow.

## Recursive VS Iterative

Anything you do with a recursion CAN be done iteratively (loop)

But recursion and space complexity might come with a big cost. Complex situation like 'Merge Sort', 'Quick Sort', 'Tree Traversal', 'Graph Traverrsal' would be better compare to iteratively. 

```diff
+ DRY
+ Readability
- Large Stack
```