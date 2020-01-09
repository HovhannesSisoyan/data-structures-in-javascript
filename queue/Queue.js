export default class Queue {
    constructor() {
        this.length = 0;
        this.isEmpty = true;
        this.data = [];
    }

    enqueue(val) {
        this.data.push(val);
        this.length ++;
        this.isEmpty = false;
    }
    
    dequeue() {
        const res = this.data.shift();
        this.length --;
        !this.length && (this.isEmpty = true); 
        return res;
    }
    logState() {
        console.log(`isEmpty = ${this.isEmpty}`)
        console.log(`length = ${this.length}`)
        console.log(`data = ${this.data}`)
    }
}