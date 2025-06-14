import Tree from "./Tree";

const arr: number[] = [];
for (let i = 0; i < 100; i++) {
    const randInt: number = Math.floor(Math.random() * (32 - 1)) + 1;
    arr.push(randInt);
}

const tree = new Tree(arr);
tree.prettyPrint(tree.root);
console.log(`tree is balanced: ${tree.isBalanced()}`);

const levelOrderArr: number[] = [];
tree.levelOrder((node) => levelOrderArr.push(node.val));
console.log(`Level Order: ${levelOrderArr.join(" ")}`);

const preOrderArr: number[] = [];
tree.preOrder((node) => preOrderArr.push(node.val));
console.log(`Pre Order: ${preOrderArr.join(" ")}`);

const postOrderArr: number[] = [];
tree.postOrder((node) => postOrderArr.push(node.val));
console.log(`Post Order: ${postOrderArr.join(" ")}`);

const inOrderArr: number[] = [];
tree.inOrder((node) => inOrderArr.push(node.val));
console.log(`Pre Order: ${inOrderArr.join(" ")}`);

// Unbalance tree
tree.insert(42);
tree.insert(69);
tree.insert(52);

tree.prettyPrint(tree.root);
console.log(`Tree is balanced: ${tree.isBalanced()}`);

// Rebalance tree
tree.rebalance();
tree.prettyPrint(tree.root);
console.log(`Tree is balanced: ${tree.isBalanced()}`);