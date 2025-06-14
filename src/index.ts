import Tree from "./Tree";

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tree = new Tree(array);

tree.deleteItem(1);
tree.prettyPrint(tree.root);
console.log(tree.isBalanced());
tree.rebalance();
tree.prettyPrint(tree.root);
console.log(tree.isBalanced());