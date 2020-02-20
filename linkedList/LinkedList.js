import ListNode from './ListNode.js'

export default class LinkedList {
    constructor() {
        this.head = this.lastNode = new ListNode();
        this.data = null;
        this.length = 0;
    };
    addStart(val) {
        const newNode = new ListNode(val);
        if (!this.length) {
            this.head.next = this.lastNode = newNode;
        } else {
            let t = this.head.next;
            this.head.next = newNode;
            newNode.next = t;
        };
        this.length ++;
    };
    addEnd(val) {
        const newNode = new ListNode(val);
        if (!this.length) {
            this.head.next = this.lastNode = newNode;
        } else {
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        };
        this.length ++;
    };
    delereStart() {
        let returnValue;
        if (!this.length) {
            returnValue =  null;
        } else {
            returnValue = this.head.next.value;
            this.head.next = this.head.next.next;
            this.length --;
        };  
        return returnValue;
    };
    delereEnd() {

    };
    logState() {      
        let t = this.head.next;     
        while (t) {
            console.log(t.value);
            t = t.next
        };
    };
};