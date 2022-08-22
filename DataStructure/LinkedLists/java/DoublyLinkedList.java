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
    }

    public void push(T val){
    }

    public void pop(){
    }

    public void unshift(T val){
    }

    public void shift(){
    }

    public static void main(String[] args) {
        DoublyLinkedList<Number> DLL = new DoublyLinkedList<Number>();
    }
}
