You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*Example:*

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
};
```

## 解题思路
将链表的表头开始，顺序相加，生成一个新的链表，然后逆序读取。
需要考虑的点是有
1. 进位怎么处理
2. 链表长度不一致时如何处理

### 核心部分
数据相加，通过数组去保存每次链表相加的项数和值。
```
// 先创建第一位为0 是为了处理首位相加产生的进位。
// 后面的代码里 sum[i-1] 的情况，如果 i = 0 的时候，再减一就会出现异常。
var sum = [0];
var i = 1;
while(l1 || l2) {
  if(l1.val) {
    sum[i] = l1.val;
    li = li.next;
  }
  if(l2.val) {
    // 避免是 undefined 时相加 为 NaN
    if(sum[i]) {
      let temp = sum[i] + l2.val;
      if(temp > 10) {
        sum[i] = temp % 10;
        // 处理进位
        sum[i-1] = sum[i-1] + 1;
      }
    }
    else sum[i] = l2.val;
    l2 = l2.next;
  }
  i++;
}
```
### 数组逆序，组成链表结构
```
// 首先要额外处理第一位。
if(sum[0] === 0) {
  sum = sum.shift();
}

function makeNode(num) {
  return {
    val: num,
    next: null
  };
}
let allNode;

function saveNode(node) {
  if (!allNode) {
    allNode = node;
  } else {
    allNode.next = node;
  }
  return allNode;
}
let sum = [1,2,3,5];
for (let i = 0; i < sum.length; i++) {
  let node = makeNode(sum[i]);
  saveNode(node);
}
```

结果失败了，原因在于 saveNode 这个方法，因为这种做法只是将最外层的 next 修改了，实际的数据结构应该是一个嵌套的结构。

我们必须要在读取嵌套结构的函数里做操作才能正确的赋值节点的嵌套结构。

数组到链表结构的生成是很麻烦的一件事，我们还是在原来的 while 大循环里老老实实做操作吧。

```
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
```