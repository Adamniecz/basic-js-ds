const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.currentRoot = null
  }

  root() {
    return this.currentRoot
  }

  add(data) {
    this.currentRoot = addNode(this.currentRoot, data)

    function addNode(node, value) {
      if (!node) {
        return new Node(value)
      }
      if (node.data === value) {
        return node
      }
      if (value < node.data) {
        node.left = addNode(node.left, value)
      } else {
        node.right = addNode(node.right, value)
      }
      return node
    }
  }

  has(data) {
    return hasNode(this.currentRoot, data)

    function hasNode(node, value) {
      if (!node) {
        return false
      }
      if (node.data === value) {
        return true
      }
      if (value < node.data) {
        return hasNode(node.left, value)
      } else {
        return hasNode(node.right, value)
      }
    }
  }

  find(data) {
    return findNode(this.currentRoot, data)

    function findNode(node, value) {
      if (!node) {
        return null
      }
      if (node.data === value) {
        return node
      }
      if (value < node.data) {
        return findNode(node.left, value)
      } else {
        return findNode(node.right, value)
      }
    }
  }

  remove(data) {
    this.currentRoot = removeNode(this.currentRoot, data)

    function removeNode(node, value) {
      if (!node) {
        return null
      }
      if (value < node.data) {
        node.left = removeNode(node.left, value)
        return node
      } else if (value > node.data) {
        node.right = removeNode(node.right, value)
        return node
      } else if (value === node.data) {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let minFromRight = node.right

        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data

        node.right = removeNode(node.right, minFromRight.data)

        return node
      }
    }
  }

  min() {
    if (!this.currentRoot) {
      return
    }
    let node = this.currentRoot

    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.currentRoot) {
      return
    }
    let node = this.currentRoot

    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();
// tree.add(2)
// tree.add(7)
// tree.add(1)
// tree.add(8)
// tree.add(4)
// tree.add(32)
// tree.add(12)
// tree.add(14)

// console.log(tree.root())