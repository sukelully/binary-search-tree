import Tree from "./Tree";

const array: number[] = [1, 2, 3, 4, 6, 7];
const tree = new Tree(array);
tree.prettyPrint(tree.root);
// tree.levelOrder((node) => console.log(node.val));
// tree.inOrder((node) => console.log(node.val));
const testNode = tree.find(6);

console.log(tree.height(testNode));
console.log(tree.height());