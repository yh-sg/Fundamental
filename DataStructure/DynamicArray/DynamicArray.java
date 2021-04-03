package DynamicArray;
//The dynamic array can grow and shrink in size.

//?How to implement it?
//*Use static array!
//1. Create a static array with an initial capacity

//2. Add elements to the underlying static array, keeping track of the number of elements.

//3. If adding another element will exceed the capacity, then create a new static array with twice
//the capacity and copy the original elements into it.


public class DynamicArray {
    public static void main(String[] args) {
        ExDynamicArr<Integer> arr = new ExDynamicArr<Integer>(2);
        arr.add(1);
        arr.add(3);
        arr.add(4);
        arr.add(2);
        arr.removeAt(2);
        System.out.println(arr.indexOf(arr));
        System.out.println(arr.toString());
    }
}
