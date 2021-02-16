package DynamicArray;

@SuppressWarnings("unchecked")
public class ExDynamicArr <T> implements Iterable <T> {

    private T [] arr;
    private int len = 0; //length user thinks the array is
    private int capacity = 0; //the actual size of the array

    public ExDynamicArr() {
        this(16);
    }

    public ExDynamicArr(int capacity){
        if(capacity < 0)
            throw new IllegalArgumentException("Illegal Capacity: " + capacity);
        this.capacity = capacity;
        arr = (T[]) new Object[capacity];
    }

    public int size(){
        return len;
    }

    public boolean isEmpty(){
        return size() == 0;
    }

    public T get(int index){
        return arr[index];
    }

    public void set(int index, T elem){
        arr[index] = elem;
    }

    public void clear(){
        for(int i=0;i<capacity;i++)
            arr[i]=null;
        len=0;
    }

    
}