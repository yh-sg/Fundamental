# Sorting

## Bubble Sort
- Using **optimized approach**. it can detect already sorted array in first pass with time complexity of O(N)
- Unless know the data is fairly sorted, this should be avoided, bubbles up.
- Time Complexity:
    - Best: O(N)
    - Average: O(n^2)
    - Worst: O(n^2)
- Space Complexity:
    - O(1)

---
## Selection Sort
- Simplest sorting approach. Find the smallest of all the elements and swap it from the position.
- No best case scenario
- Time Complexity:
    - All case: O(n^2)
- Space Complexity:
    - O(1)

---
## Insertion Sort
---
- The array is virtually split into a sorted and an unsorted part.
- Values from the unsorted part are picked and placed at the correct position in the sorted part.
- For small data values, insertion sort performs efficiently.
- Time Complexity:
    - Best: O(N)
    - Average: O(n^2)
    - Worst: O(n^2)
- Space Complexity:
    - O(1)

---

## Merge Sort
---
- Divide and conquer algorithm, continously divides the array into 2 halves.
- Using helper function, recurses on both left and right subarrays and merges the two sorted halves.
- Stable?: **Yes**
- Time Complexity:
    - All case: O(nlog(n))
        - O(log(n)) during decompositions E.g. 8 element require 2^3 splits, 32 require 2^5.
        - O(n) comparisons during final merging 
- Space Complexity:
    - O(n)

---
## Quick Sort
---
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

## Raxis/Counting/Heap Sort
### Sorting Exercise

1. Sort 10 schools around your house by distance:
2. eBay sorts listings by the current Bid amount:
3. Sport scores on ESPN
4. Massive database (can't fit all into memory) needs to sort through past year's user data
5. Almost sorted Udemy review data needs to update and add 2 new reviews
6. Temperature Records for the past 50 years in Canada
7. Large user name database needs to be sorted. Data is very random.
8. You want to teach sorting for the first time
    <details><summary>Answer</summary>
    <p>

    ```java
    "Bubble Sort"
    ```

    </p>
    </details>