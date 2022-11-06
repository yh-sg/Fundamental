# Sorting

## Bubble Sort
- Bubble sort repeatedly swapping the adjacent elements, biggest to the last element.
- Use Case: Nothing much, for studying purpose. Not suitable for large data sets and ***can be optimized when data is fairly sorted***.
- Time Complexity:
    <table>
        <tbody>
            <tr>
                <td>Best</td>
                <td>O(n) - Super Rare / O(n^2) Usually</td>
            </tr>
            <tr>
                <td>Average</td>
                <td>O(n^2)</td>
            </tr>
            <tr>
                <td>Worst</td>
                <td>O(n^2)</td>
            </tr>
        </tbody>
    </table>
- Space Complexity:
    - O(1)
## Selection Sort

- Simplest sorting approach. Find the smallest of all the elements and swap it to the first position from the position.
- Use Case: Nothing much, for studying purpose. No optimization.
- Time Complexity:
    <table>
        <tbody>
            <tr>
                <td>All Cases</td>
                <td>O(n^2)</td>
            </tr>
        </tbody>
    </table>
- Space Complexity:
    - O(1)

## Insertion Sort

- The array is virtually split into a sorted and an unsorted part. E.g. Left side sorted, right side not sorted. Values from the unsorted part are picked and placed at the correct position in the sorted part. 
- Use case : ***Small data values***, insertion sort performs efficiently.
- Time Complexity:
    <table>
        <tbody>
            <tr>
                <td>Best</td>
                <td>O(n)</td>
            </tr>
            <tr>
                <td>Average</td>
                <td>O(n^2)</td>
            </tr>
            <tr>
                <td>Worst</td>
                <td>O(n^2)</td>
            </tr>
        </tbody>
    </table>
- Space Complexity:
    - O(1)

## [Stable vs Unstable sort](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)
- A stable sorting algorithm is the one that sorts the identical elements in their same order as they appear in the input, whilst unstable sorting may not satisfy the case. 

## Merge Sort

- Divide and conquer algorithm, continously divides the array into 2 halves. Using helper function, recurses on both left and right subarrays and merges the two sorted halves.
- Use case: Large to super duper large datasets. Compare to quicksort, it's a stable algorithm. However, in average cases it's slower and takes up more memory.
- Time Complexity:
    <table>
        <tbody>
            <tr>
                <td>All Cases</td>
                <td>O(n log(n))</td>
            </tr>
        </tbody>
    </table>
- Space Complexity:
    - O(n)

## Quick Sort

- Divide and conquer algorithm, using **pivot**. Can be:
    1. First/last element as pivotor 
    2. Sum all and average it, find the median as pivot
    3. Let random element as pivot
    - However, picking the smallest/largest element could spell **disaster**, leading to worst case scenario.
- Use case: Medium to Large dataset. Compare to mergesort, it's an unstable algorithm. In average cases it's faster and furthermore it takes up lesser memory which is a big plus.
- Time Complexity:
    <table>
        <tbody>
            <tr>
                <td>Best</td>
                <td>O(n log(n))</td>
            </tr>
            <tr>
                <td>Average</td>
                <td>O(n log(n))</td>
            </tr>
            <tr>
                <td>Worst</td>
                <td>O(n^2)</td>
            </tr>
        </tbody>
    </table>
- Space Complexity:
    - O(log(n))

## Radix/Counting Sort
- Bubble/Insertion/Selection/Merge/Quick sorts are comparison sort, while radix/counting sorts are not.
- These sorts only work with numbers with limited range

### Sorting Exercise

1. Sort 10 schools around your house by distance:
    <details><summary>Answer</summary>
    <p>

    ```java
    Insertion Sort
    ```

    </p>
    </details>
2. eBay sorts listings by the current Bid amount:
    <details><summary>Answer</summary>
    <p>

    ```java
    Radix/counting Sort, due to the range limit and numbers for bidding($1~$9xxxx) within integer/2 place float range.
    ```

    </p>
    </details>
3. Sport scores on ESPN
    <details><summary>Answer</summary>
    <p>

    ```java
    Quick Sort, due to many difference requirements in many different sports and memory consumption
    OR
    Radix/counting Sort, due to the range limit and numbers for rating, 0-10
    It doesn't matter, during interview as long as you know how to explain and give your reasons for the answers
    ```

    </p>
    </details>
4. Massive database (can't fit all into memory) needs to sort through past year's user data
    <details><summary>Answer</summary>
    <p>

    ```java
    Quick Sort - For memory concern
    OR
    Merge Sort - Since data is super big, worried about performance issue and if there's external memory provided instead of in-memory
    ```

    </p>
    </details>
5. Almost sorted Udemy review data needs to update and add 2 new reviews
    <details><summary>Answer</summary>
    <p>

    ```java
    Insertion Sort
    ```

    </p>
    </details>
6. Temperature Records for the past 50 years in Canada
    <details><summary>Answer</summary>
    <p>

    ```java
    Radix/counting Sort
    quick sort(if in-memory is a concern)
    ```

    </p>
    </details>
7. Large user name database needs to be sorted. Data is very random.
    <details><summary>Answer</summary>
    <p>

    ```java
    Merge Sort(if in memory is not a concern)
    Quick Sort(if not worried about performance)
    ```

    </p>
    </details>
8. You want to teach sorting for the first time
    <details><summary>Answer</summary>
    <p>

    ```java
    Bubble Sort / Selection Sort
    ```

    </p>
    </details>