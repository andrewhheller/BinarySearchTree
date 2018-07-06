// consructor function; create node in tree
function BinarySearchTree(value) {

  this.value = value;
  this.left = this.right = null;
  this.count = 1;

}

BinarySearchTree.prototype.insert = function(value) {

  this.count++;

  if(value < this.value) {
      if(!this.left) {
          this.left = new BinarySearchTree(value);
      }
      else {
          this.left.insert(value)
      }
  }

  else {
      if(value > this.value) {
          if(!this.right) {
              this.right = new BinarySearchTree(value);
          }
          else {
              this.right.insert(value);
          }
      }
  }

}

BinarySearchTree.prototype.contains = function(searchValue) {

  if((this.left) && nodeValue < this.value) {
    let result = this.left.contains(searchValue);
    if (result) {
      return true;
    }
  }

  else if((this.right) && nodeValue > this.value) {
    let result = this.right.contains(searchValue);
    if(result) {
      return true;
    }
  }

  else if(searchValue === this.value) {
    return true;
  }

  return false;
}

BinarySearchTree.prototype.traverseInOrder = function(fn) {

  if(this.left) {
    this.left.traverseInOrder(fn);
  }

  fn(this.value);

  if(this.right) {
    this.right.traverseInOrder(fn);
  }

}

BinarySearchTree.prototype.traverseByLevel = function(fn) {

  // create a queue
  const queue = [this];

  // while anything is in queue
  while(queue.length) {
     const item = queue.shift();
     fn(item.value);
     if(item.left) {
       queue.push(item.left);
     }
     if(item.right) {
       queue.push(item.right);
     }
  }
}

BinarySearchTree.prototype.size = function() {
  return this.count;
}

// create tree with reoot node
let tree = new BinarySearchTree(20);


// makes nodes on the correct branches
// tree.insert(12)
// console.log(tree.left.value)
// 12

// tree.insert(22)
// console.log(tree.right.value);
// 22

// tree.insert(5);
// console.log(tree.left.left.value);

// insert multiple values via callback function
const valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]

valuesToInsert.forEach((value) => {
    tree.insert(value)
})

// correctly searches for a value
// console.log(tree.contains(15));
// console.log(tree.contains(100));

// correctly reports tree size (# of nodes)
// console.log(tree.size());
// 20

// can output in-order traversal of tree

// testArr = [];

// tree.traverseInOrder((val) => {
//     testArr.push(val)
//   })

// console.log(testArr);
// [ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]

// ### can perform a breadth travesal (by level)

// const depth = []

// tree.traverseByLevel((val) => {
//   depth.push(val)
// })

// console.log(depth);
// ([20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31, 34])
