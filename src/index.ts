import Tree from "./Tree";

const array: number[] = [2, 3, 4, 5, 6, 7];
const tree = new Tree(array);
tree.prettyPrint(tree.root);
tree.insert(1);
tree.insert(1);
tree.prettyPrint(tree.root);