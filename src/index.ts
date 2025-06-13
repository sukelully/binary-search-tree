import Tree from "./Tree";

const array: number[] = [1, 2, 3, 4];
const tree = new Tree(array);
// tree.deleteItem(1);
tree.prettyPrint(tree.root);

console.log(tree.isBalanced());