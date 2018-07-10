const expect = require('chai').expect;

const BinarySearchTree = require('../binarysearchtree.js');

describe ('Binary Search Tree', function() {

  it('is a function', function() {
    expect(BinarySearchTree).to.be.a('function');
  });

});

describe('Binary Seach Tree Operations', function() {

  let tree;

  beforeEach(function() {
    tree = new BinarySearchTree(20);
    tree.insert(15);
    tree.insert(25);
    tree.insert(5);
    tree.insert(22);
  })

  it('can create a root node', function () {
    expect(tree.value).to.equal(20);
  });

  it('can insert nodes to the left and right', function() {
    expect(tree.left.value).to.equal(15);
    expect(tree.right.value).to.equal(25);
    expect(tree.left.left.value).to.equal(5);
    expect(tree.right.left.value).to.equal(22);
  });

  it('can report the size of the tree', function() {
    expect(tree.size()).to.equal(5);
  });

  it('can search the tree', function() {
    expect(tree.contains(20)).to.equal(true);
    expect(tree.contains(100)).to.equal(false);
  });

});

describe('binary search tree traversal', function() {

  let tree;

  let valuesToInsert;

  beforeEach(function() {

    tree = new BinarySearchTree(20);

    valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];

    valuesToInsert.forEach((value) => {
      tree.insert(value)
    })

  });

  it('can execute an in-order traversal', function() {

    const testArray = [];

    tree.traverseInOrder((val) => {
      testArray.push(val)
    });

    expect(testArray).to.deep.equal([0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50]);

  });

  it('can execute a breadth (by level) traversal', function() {

    const depth = [];

    tree.traverseByLevel((val) => {
      depth.push(val)
    });

    expect(depth).to.deep.equal([20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34]);

  });




})
