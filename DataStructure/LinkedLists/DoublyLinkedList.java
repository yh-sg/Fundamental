package LinkedLists;

import javax.management.RuntimeErrorException;

public class DoublyLinkedList<T>{

    private int length;
    private Node<T> head = null;
    private Node<T> tail = null;

    private class Node<T>{

        private T val;
        private Node<T> prev;
        private Node<T> next;

        public Node(T val, Node<T> prev, Node<T> next){
            this.val = val;
            this.prev = prev;
            this.next = next;
        }

        public Node(T val){
            this.val = val;
        }

    }

    public void traverse(){
        Node<T> current = this.head;
        if(this.head==null){
            System.out.println("Empty");
            return;
        }else{
            System.out.println("Doubly Linked List");
            while(current!=null){
                System.out.print(current.val + " ");
                current = current.next;
            }
            // System.out.println(this.length);
        }
    }

    public void push(T val){
        if(this.head==null){
            this.head = this.tail = new Node<T>(val, null, null);
        }else{
            this.tail.next = new Node<T>(val, tail, null);;
            this.tail = this.tail.next;
        }
        this.length++;
    }

    public void pop(){
        if(this.head==null){
            System.out.println("Empty");
            return;
        }
        Node<T> removedNode = this.tail;
        
        if(this.head.next==null)
            this.head=this.tail=null;

        else{
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;
    }

    public void unshift(T val){
        if(this.head==null){
            this.head = this.tail = new Node<T>(val, null, null);
        }else{
            this.head.prev = new Node<T>(val, null, head);;
            this.head = this.head.prev;
        }
        this.length++;
    }

    public void shift(){
        Node<T> removedNode = this.head;
        if(this.head==null){
            System.out.println("Empty");
            return;
        }

        if(this.head.next==null)
            this.head = this.tail = null;
        else{
            this.head = this.head.next;
            removedNode.next = null;
            this.head.prev = null;
        }
        this.length--;
    }

    public static void main(String[] args) {
        DoublyLinkedList<Number> DLL = new DoublyLinkedList<Number>();
        DLL.push(10);
        DLL.push(20);
        DLL.push(30);
        DLL.push(40);
        DLL.pop();
        DLL.pop();
        DLL.unshift(-11.11);
        DLL.shift();
        DLL.traverse();
    }
}
