import Queue from './Queue.js'

const q = new Queue();
q.logState();
q.enqueue(4);
q.logState();
q.enqueue(14);
q.logState();
q.dequeue();
q.logState();
q.dequeue();
q.logState();