import TreeNode from './Node';

export default class Tree {
  arr: number[];
  root: TreeNode | null;

  constructor(arr: number[]) {
    this.arr = arr;
    this.root = this.buildTree(this.arr);
  }

  buildTree(arr: number[]): TreeNode | null {
    if (!arr.length) {
      return null;
    }

    const sortedArr: number[] = [...new Set(arr.sort((a, b) => a - b))];
    return this.buildSubTree(sortedArr, 0, sortedArr.length - 1);
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

  insert(val: number): void {
    let node: TreeNode | null = this.root;
    if (val === null || !node) return;

    while (node) {
      const direction: 'left' | 'right' = val < node.val ? 'left' : 'right';
      if (node[direction] === null) {
        node[direction] = new TreeNode(val);
        return;
      } else {
        node = node[direction];
      }
    }
  }

  deleteItem(val: number, node: TreeNode | null = this.root): TreeNode | null {
    if (!node) return null;

    if (val < node.val) {
      node.left = this.deleteItem(val, node.left);
    } else if (val > node.val) {
      node.right = this.deleteItem(val, node.right);
    } else {
      // Node found
      if (!node.left && !node.right) {
        // Leaf node
        return null;
      } else if (!node.right) {
        // Node has one left child
        return node.left;
      } else if (!node.left) {
        // Node has one right child
        return node.right;
      } else {
        // Node has two children
        const minRight = this.findMinNode(node.right);
        node.val = minRight.val;
        node.right = this.deleteItem(minRight.val, node.right);
      }
    }
    return node;
  }

  findMinNode(node: TreeNode): TreeNode {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  find(val: number): TreeNode | null {
    let node: TreeNode | null = this.root;

    if (!node) {
      return null;
    }

    while (node) {
      const direction: 'left' | 'right' = val < node.val ? 'left' : 'right';
      if (node.val === val) {
        return node;
      } else {
        node = node[direction];
      }
    }
    return null;
  }

  levelOrder(callback: (node: TreeNode) => void): void {
    if (typeof callback !== "function") {
      throw new Error("Callback function is required");
    }

    if (!this.root) return;

    const queue: TreeNode[] = [this.root];

    while (queue.length) {
      const current: TreeNode = queue[0];
      callback(current);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
      queue.shift();
    }
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
