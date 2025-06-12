import Tree from "./Tree";

const array: number[] = [1, 2, 3, 4, 5, 6, 7];
const tree = new Tree(array);
tree.prettyPrint(tree.root);
tree.insert(6);
// tree.deleteItem(4);
tree.prettyPrint(tree.root);