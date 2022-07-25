package oops;

public class Node {
	int data;
	Node next;
	
	Node(int data){
		this.data=data;
		next=null;
	}
	
	Node(int data,Node cur){
		this.data = data;
		next=cur;
	}
}
