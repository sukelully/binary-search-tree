import TreeNode from './Node';

export default class Tree {
  input: number[];
  root: TreeNode | null;

  constructor(input: number[]) {
    this.input = input;
    this.root = this.buildTree(this.input);
  }

  buildTreeRecur(arr: number[], start: number, end: number): TreeNode | null {
    if (start > end) return null;

    const mid: number = Math.floor((start + end) / 2);

    const root: TreeNode = new TreeNode(arr[mid]);
    root.left = this.buildTreeRecur(arr, start, mid - 1);
    root.right = this.buildTreeRecur(arr, mid + 1, end);

    return root;
  }

  buildTree(arr: number[]) {
    const sortedArr: number[] = [...new Set(arr.sort((a, b) => a - b))];
    this.input = sortedArr;
    return this.buildTreeRecur(this.input, 0, this.input.length - 1);
  }

  prettyPrint(node: TreeNode | null, prefix: string = '', isLeft: boolean = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}
