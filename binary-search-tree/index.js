import BinarySearchTree from './binarySearchTree.js'

const binarySearchTree = new BinarySearchTree(10);
binarySearchTree.insert(5);
binarySearchTree.insert(15);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(13);
binarySearchTree.insert(18);
binarySearchTree.breathFirstTraversal();