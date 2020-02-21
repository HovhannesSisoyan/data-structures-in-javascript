import LinkedList from '../linkedList/LinkedList.js'

export default class Queue {
    constructor() {
        this.length = 0;
        this.isEmpty = true;
        this.data = new LinkedList();
    }

    enqueue(val) {
        this.data.addEnd(val);
        this.length ++;
        this.isEmpty = false;
    }
    
    dequeue() {
        const res = this.data.deleteStart();
        this.length --;
        !this.length && (this.isEmpty = true); 
        return res;
    }
    logState() {
        console.log(`isEmpty = ${this.isEmpty}`)
        console.log(`length = ${this.length}`)
        this.data.logState();
    };
};