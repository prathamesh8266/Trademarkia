package oops;



public class linkedlist {
	Node head;
	
	void add(int data) {
		Node toAdd = new Node(data);
		if(head==null) {
			head = toAdd;
			return;
		}
		Node temp = head;
		while(temp.next!=null) {
			temp = temp.next;
		}
		temp.next = toAdd;
	}
	
	boolean isEmpty() {
		return head==null;
	}
	
	void print() {
		Node temp = head;
		if(temp==null) {
			System.out.println("null");
			return;
		}
		while(temp!=null) {
			System.out.println(temp.data);
			temp=temp.next;
		}
	}
	
	void get(int ind) {
		Node temp=head;
		for(int i=0;i<ind;i++) {
			temp = temp.next;
		}
		System.out.println(temp.data);
	}
	
	void add(int ind,int data) {
		Node temp = head;
		for(int i=0;i<ind-1;i++) {
			temp=temp.next;
		}
		Node toCont = temp.next;
		temp.next = new Node(data);
		temp.next.next = toCont;
		
	}
	
	public static void main(String[] args) {
		
		linkedlist ll = new linkedlist();
		ll.add(12);
		ll.add(56);
		ll.add(23);
		ll.add(25);
		ll.add(56);
		ll.add(90);
		ll.add(43);
		ll.print();
		System.out.println("////////");
		ll.add(2,45);
		ll.print();

	}
}
