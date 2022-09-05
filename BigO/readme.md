## BIG O's (Fast to Slow)

**O(1)** - Constant 
- No loops

**O(log N)** Logarithmic 
- Usually searching algorithms have log n if they are sorted (Binary Search)

**O(n)** - Linear 
- for/while loops through n items

**O(n log(n))** - Log Linear 
- Usually are sorting operations

**O(n^2)** - Quadratic 
- Every element in a collection needs to be compared to every other element. e.g. Two nested loops

**O(2^n)** - Exponential
- Recursive algorithms that solves a problem of size N

**O(n!)** - Factorial 
- Adding a loop for every element

---

## What's good code?

1. Readable
2. Scalable (Big O) - Performance

### Rule Book
1. Worst Case
2. Remove Constants
3. Different terms for inputs
4. Drop Non Dominants