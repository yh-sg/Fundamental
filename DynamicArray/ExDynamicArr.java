package DynamicArray;

//Similar to ArrayList in Java!

@SuppressWarnings("unchecked")
public class ExDynamicArr<T> implements Iterable<T> {

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

    public void add(T elem){
        //Resizing
        if(len+1>=capacity){
            if(capacity==0)
                capacity=1; //Default
            else
                capacity*=2; //Double the size!
            T[] new_arr = (T[]) new Object[capacity];
            for (int i = 0; i < len; i++) 
                new_arr[i] = arr[i];
            arr = new_arr; //With additional nulls padded
        }
        arr[len++] = elem;
    }

    public T removeAt(int rm_index){
        if(rm_index >= len || rm_index < 0)
            throw new IndexOutOfBoundsException();
        T data = arr[rm_index];
        T[] new_arr = (T[]) new Object[len - 1];
        
        for (int i = 0, j = 0 ; i < len; i++, j++) 
            if(i==rm_index)
                j--;
            else
                new_arr[j]=arr[i];
            arr=new_arr;
            capacity = --len;
            return data;
    }

  // Iterator is still fast but not as fast as iterative for loop
  @Override
  public java.util.Iterator<T> iterator() {
    return new java.util.Iterator<T>() {
      int index = 0;

      @Override
      public boolean hasNext() {
        return index < len;
      }

      @Override
      public T next() {
        return arr[index++];
      }

      @Override
      public void remove() {
        throw new UnsupportedOperationException();
      }
    };
  }
    
}