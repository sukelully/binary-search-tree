import TreeNode from './Node';

export default class Tree {
  arr: number[];
  root: TreeNode | null;

  constructor(arr: number[]) {
    this.arr = arr;
    this.root = this.buildTree(this.arr);
  }

  buildSubTree(arr: number[], start: number, end: number): TreeNode | null {
    if (start > end) return null;

    const mid: number = Math.floor((start + end) / 2);
    const root = new TreeNode(arr[mid]);

    root.left = this.buildSubTree(arr, start, mid-1);
    root.right = this.buildSubTree(arr, mid+1, end);

    return root;
  }

  buildTree(arr: number[]): TreeNode | null {
    if (!arr.length) {
      this.root = null;
      return null;
    }
    
    const sortedArr: number[] = [...new Set(arr.sort((a, b) => a - b))];
    return this.buildSubTree(sortedArr, 0, sortedArr.length - 1);
  }

  insert(val: number): void {
    let node = this.root;
    if (!val || !node) return;

    while (node !== null && (node.left !== null || node.right !== null)) {
      console.log(node.val);
      if (val < node.val && node.left !== null) {
        node = node.left;
      } else if (val > node.val && node.right !== null) {
        node = node.right;
      } else {
        // Leaf node rached
        break;
      }
    }
    
    // Leaf node reached
    if (node !== null && val < node.val) {
      node.left = new TreeNode(val);
    } else if (node !== null && val > node.val) {
      node.right = new TreeNode(val);
    } else {
      console.log('Node already exists');
      return;
    }
  }

  prettyPrint(node: TreeNode | null, prefix: string = '', isLeft: boolean = true): void {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.val}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}
