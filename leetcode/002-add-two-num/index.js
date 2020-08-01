function ListNode(val) {
  this.val = val;
  this.next = null;
}



var addTwoNumbers = function(l1, l2) {
  let link = new ListNode(0)
  let temp = link;
  let carry = 0;
  while(l1 || l2) {
    let value = (l1 && l1.val) + (l2 && l2.val) + temp.val;
    temp.val = (value) % 10
    carry = value >= 10 ? 1 : 0;
    temp.next = new ListNode(carry)
    temp = temp.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  return link
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