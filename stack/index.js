import Stack from './Stack.js'

const s = new Stack();
s.logState();
s.push(4);
s.logState();
s.push(14);
s.logState();
s.pop();
s.logState();
s.pop();
s.logState();