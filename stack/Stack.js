export default class Stack {
    constructor() {
        this.length = 0;
        this.isEmpty = true;
        this.data = [];
    }

    peek() {
        return this.data[this.length-1]
    }

    push(val) {
        this.data.push(val);
        this.length ++;
        this.isEmpty = false;
    }
    
    pop() {
        const res = this.data.pop();
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