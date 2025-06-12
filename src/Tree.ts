import TreeNode from './Node';

export default class Tree {
  arr: number[];
  root: TreeNode | null;

  constructor(arr: number[]) {
    this.arr = arr;
    this.root = this.buildTree(this.arr);
  }

  buildSubTree(
    sortedArr: number[],
    start: number,
    end: number
  ): TreeNode | null {
    // Leaf node reached, set child nodes to null
    if (start > end) return null;

    const mid: number = Math.floor((start + end) / 2);
    const root = new TreeNode(sortedArr[mid]);

    root.left = this.buildSubTree(sortedArr, start, mid - 1);
    root.right = this.buildSubTree(sortedArr, mid + 1, end);

    return root;
  }

  buildTree(arr: number[]): TreeNode | null {
    if (!arr.length) {
      return null;
    }

    const sortedArr: number[] = [...new Set(arr.sort((a, b) => a - b))];
    return this.buildSubTree(sortedArr, 0, sortedArr.length - 1);
  }

  insert(val: number): void {
    let current = this.root;
    if (val === null || !current) return;

    while (current) {
      const direction: "left" | "right" = current.val > val ? "left" : "right";
      if (current[direction] === null) {
        current[direction] = new TreeNode(val);
        return;
      } else {
        current = current[direction];
      }
    }
  }

  deleteItem(val: number): void {
    
  }

  prettyPrint(
    node: TreeNode | null,
    prefix: string = '',
    isLeft: boolean = true
  ): void {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.val}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}
