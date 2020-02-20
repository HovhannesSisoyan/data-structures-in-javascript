import ListNode from './ListNode'

class LinkedList {
    constructor() {
        this.first = this.last = new ListNode();
        this.data = null;
        this.length = 0;
    }
    addLast(val) {
        newNode = new ListNode(val);
        this.first.next = newNode;
        if (!this.length) {

        }
        newNode.next = this.last;
        this.length ++;
    }

}