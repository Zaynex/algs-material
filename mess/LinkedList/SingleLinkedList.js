/**
 * https://www.geeksforgeeks.org/reverse-a-linked-list/
 * 单链表模型
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  // 向表尾中插入
  append(value) {
    const newNode = new Node(value);
    let curr = this.head;
    // 如果存在 next 就继续赋值给 next, 直到找到表尾
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    return true;
  }

  findByValue(value) {
    let curr = this.head.next;
    while (curr !== null && curr.value !== value) {
      curr = curr.next;
    }
    if (curr === null) return false;
    return curr;
  }

  // 插入在指定元素后
  insert(nodeValue, value) {
    const newNode = new Node(value);
    const nodeInLink = this.findByValue(nodeValue);
    if (!nodeInLink) return false;
    newNode.next = nodeInLink.next;
    nodeInLink.next = newNode;
    return true;
  }

  // 找到当前链表的值的前一个表项
  findPrev(value) {
    let curr = this.head;
    while (curr.next !== null && curr.next.value !== value) {
      curr = curr.next;
    }
    if (curr.next === null) {
      return false;
    }
    return curr;
  }

  remove(value) {
    const findNode = this.findPrev(value);
    if (!findNode) return false;
    findNode.next = findNode.next.next;
    return true;
    // 如果是其他手动GC的语言，需要考虑 free memory
  }

  findByIndex(index) {
    if (index < 0) return false;
    let curr = this.head.next;
    while (index && curr) {
      curr = curr.next;
      index--;
    }
    return curr ? curr : false;
  }

    // 链表反转  迭代法
  reverseList() {
    let curr = this.head.next;
    let prev = null;
    let next = null;
    while(curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head.next = prev;
  }

  map(callback) {
    let curr = this.head.next;
    while (curr !== null) {
      callback && callback(curr.value);
      curr = curr.next;
    }
  }
}

module.exports = LinkedList;