function ListNode(val) {
  this.val = val;
  this.next = null;
}



var addTwoNumbers = function(l1, l2) {
  let carry = 0;  // 是否有进位
  let head = new ListNode(0); // 新建一个默认表头，值是什么无所谓，最后返回后继节点
  let tail = head; // tail 表示领带，是用来链表的前驱替换
  while(l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carry;
    let node = new ListNode(sum % 10);
    carry = sum >= 10 ? 1 : 0;
    // 我们先将 节点赋值给表头的 next
    tail.next = node;
    // 然后又让表头指向的是 下一个节点
    tail = tail.next;
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  if(carry) tail.next = new ListNode(carry);
  return head.next;
}

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}
console.log(JSON.stringify(addTwoNumbers(l1, l2)));