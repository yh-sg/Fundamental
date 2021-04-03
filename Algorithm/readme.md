# Algorithm
## Searching
### Linear Search
- Search for value one by one
- E.g. IndexOf(), includes()
- Time Complexity:
    - Best: O(1)
    - Average: O(N)
    - Worst: O(N)

### Binary Search
- Elimate half of the remaining elements at a time
- Works only in sorted arrays!
- Divide and Conquer
- Time Complexity:
    - Best: O(1)
    - Average: O(log n)
    - Worst: O(log n)

## Sorting
### Bubble Sort
- Using **optimized approach**. it can detect already sorted array in first pass with time complexity of O(N)
- Unless know the data is fairly sorted, this should be avoided
- Time Complexity:
    - Best: O(N)
    - Average: O(n^2)
    - Worst: O(n^2)
- Space Complexity:
    - O(1)

### Selection Sort
- Simplest sorting approach. Find the smallest and put it to first.
- No best case scenario
- Time Complexity:
    - All case: O(n^2)
- Space Complexity:
    - O(1)

### Insertion Sort
- For smaller values of N, insertion sort performs efficiently like other quadratic sorting algorithms.
- Generally used when N is small. For large values of N, it's inefficient.
- Time Complexity:
    - Best: O(N)
    - Average: O(n^2)
    - Worst: O(n^2)
- Space Complexity:
    - O(1)

### Merge Sort
- Divide and conquer algorithm, continously divides the array into 2 halves.
- Using helper function, recurses on both left and right subarrays and merges the two sorted halves.
- Stable?: **Yes**
- Time Complexity:
    - All case: O(nlog(n))
        - O(log(n)) during decompositions E.g. 8 element require 2^3 splits, 32 require 2^5.
        - O(n) comparisons during final merging 
- Space Complexity:
    - O(n)

### Quick Sort
- Divide and conquer algorithm, using **pivot**. Can be:
    1. First/last element as pivotor 
    2. Sum all and average it, find the median as pivot
    3. Let random element as pivot
- The key is partition. Put smaller infront of pivot and bigger behind.
- Stable?: **No**
- Time Complexity:
    - Best: O(nlog(n))
    - Average: O(nlog(n))
    - Worst: O(n^2)
        - O(log(n)) / O(n) decompositions 
        - E.g. Sorted array using first as pivot causing O(n)
- Space Complexity:
    - O(n)

### Radix Sort
- Unlike previous sortings, it's not a compairison sort.
- Sorting algo like bucket sort, distributes elements of an array into number of buckets.
- The difference is that radix sort will 're-bucketing' the array after the initial stage as oppose to sorting each bucket and merging.
- Time Complexity:
    - All case: O(nk)
        - n - length of array
        - k - number of digits(average)
- Space Complexity:
    - O(n + k)

### Bucket Sort?