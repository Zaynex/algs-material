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
    this.next = null;
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

  findLast() {
    let curr = this.head.next;
    while (curr && curr.next) {
      curr = curr.next;
    }
    return curr;
  }

  // 链表反转  迭代法
  reverseList() {
    let curr = this.head.next;
    let prev = null;
    let next = null;
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head.next = prev;
  }

  isCycle() {
    let curr = this.head.next;
    let base = this.head.next;
    while (curr !== null && base !== null && base.next !== null) {
      base = base.next.next;
      curr = curr.next;
      if (base === curr) {
        return true;
      }
    }
    return false;
  }

  map(callback) {
    let curr = this.head.next;
    while (curr !== null) {
      callback && callback(curr.value);
      curr = curr.next;
    }
  }

  static mergeLinkedList(list1, list2) {
    if (list1 === null || list2 === null) {
      return list1 || list2;
    }
    let curr1 = list1.head.next;
    let curr2 = list2.head.next;
    let resultList = new LinkedList();
    while (curr1 !== null && curr2 !== null) {
      if (curr1.value <= curr2.value) {
        resultList.append(curr1.value);
        curr1 = curr1.next;
      } else {
        resultList.append(curr2.value);
        curr2 = curr2.next;
      }
    }
    const resultListLast = resultList.findLast();
    resultListLast.next = curr2 ? curr2 : curr1;
    return resultList;
  }
}

module.exports = LinkedList;
