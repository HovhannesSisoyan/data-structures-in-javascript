import ListNode from './ListNode.js'

export default class LinkedList {
    constructor() {
        this.head = this.lastNode = new ListNode();
        this.data = null;
        this.length = 0;
    };

    // O(1) time complexity
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

    // O(1) time complexity
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

    // O(1) time complexity
    deleteStart() {
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

    // O(n) time complexity
    deleteEnd() {
        let returnValue;
        if (!this.length) {
            returnValue =  null;
        } else {
            let t = this.head;
            let tNext = t.next;
            while (tNext !== this.lastNode) {
                tNext = tNext.next;
                t = t.next;
            };
            returnValue = tNext.value;
            t.next = tNext = null;
            this.lastNode = t;
            this.length --;
        };
        return returnValue;
    };
    logState() {      
        let t = this.head.next;     
        while (t) {
            console.log(t.value);
            t = t.next
        };
    };
};