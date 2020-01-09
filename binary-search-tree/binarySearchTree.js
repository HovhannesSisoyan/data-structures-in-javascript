import TreeNode from './treeNode.js';
import Queue from '../queue/Queue.js';

export default class BinarySearchTree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue)
        this.root.left = null;
        this.root.right = null;
    }
    breathFirstTraversal() {
        const queue = new Queue();
        queue.enqueue(this.root);
        while(!queue.isEmpty) {
            const currentNode = queue.dequeue();
            currentNode.left && queue.enqueue(currentNode.left);
            currentNode.right && queue.enqueue(currentNode.right);
            console.log(currentNode.value);
        }
    }
    insert(value) {
        const newNode = new TreeNode(value)
        let currentNode = this.root;
        while(true) {
            if (value >= currentNode.value) {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            } else {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            }
        }
    }
}