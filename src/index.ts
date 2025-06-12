import Tree from "./Tree";

const array: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const tree = new Tree(array);
tree.prettyPrint(tree.root);
tree.deleteItem(10);
tree.prettyPrint(tree.root);