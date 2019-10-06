import test from "ava";
import LinkedList from "./SingleLinkedList";

const isObject = x => Object.prototype.toString.call(x) === "[object Object]";
const listToArr = list => {
  let arr = [];
  list.map(item => arr.push(item));
  return arr;
};

test("exports", t => {
  let keys = [
    "append",
    "findByValue",
    "insert",
    "findPrev",
    "remove",
    "findByIndex",
    "findLast",
    "reverseList",
    "isCycle",
    "map"
  ];
  t.is(typeof LinkedList, "function", "exports a function");

  let linkList = new LinkedList();
  t.true(isObject(linkList), "works with `new` keyword");
  keys.forEach(k => {
    t.is(typeof linkList[k], "function", `~> has "${k}" method`);
  });
});

test("append", t => {
  let foo = new LinkedList();
  t.is(foo.append("111"), true, "~> returns `true` when known");
});

test("findByValue (111)", t => {
  let foo = new LinkedList();
  foo.append("111");
  t.is(foo.findByValue("111").value, "111", "~> returns `111` when match");
  t.is(foo.findByValue("222"), false, "~> returns `false` when not match");
});

test("insert", t => {
  let foo = new LinkedList();
  foo.append("111");
  t.is(foo.insert("111", "222"), true, "~> returns `true` when match");
  t.is(foo.insert("333", "222"), false, "~> returns `false` when note match");
});

test("findPrev", t => {
  let foo = new LinkedList();
  foo.append("111");
  foo.append("222");
  t.is(foo.findPrev("222").value, "111", "~> returns `111` when find prev");
  t.is(foo.findPrev("333"), false, "~> returns `false` when find fail");
});
test("remove", t => {
  let foo = new LinkedList();
  foo.append("111");
  t.is(foo.remove("111"), true, "~> returns `true` when remove success");
  t.is(foo.remove("222"), false, "~> returns `false` when remove fail");
});

test("findIndex", t => {
  let foo = new LinkedList();
  foo.append("111");
  t.is(
    foo.findByIndex(-1),
    false,
    "~> returns `false` when params index not validate"
  );
  t.is(foo.findByIndex(0).value, "111", "~> returns `111` when find index");
  t.is(foo.findByIndex(2), false, "~> returns `false` when not find");
});

test("findLast", t => {
  let foo = new LinkedList();
  foo.append("111");
  t.is(
    foo.findLast().value,
    "111",
    "~> return `111` when findLast value is 111"
  );
  foo.append("222");
  t.is(
    foo.findLast().value,
    "222",
    "~> return `222` when findLast value is 111"
  );
  let bar = new LinkedList();
  t.is(bar.findLast(), null, "~> returns `null` when list is empty");
});

test("map", t => {
  let foo = new LinkedList();
  let tempArr = [1, 34, 34, 565, 45];
  tempArr.forEach(item => {
    foo.append(item);
  });
  let arr = [];
  const callback = val => {
    arr.push(val);
  };
  foo.map(callback);
  t.deepEqual(arr, tempArr, "~> returns `true` when two array is equal");
});

test("reverseList", t => {
  let foo = new LinkedList();
  let tempArr = [1, 34, 34, 565, 45];
  tempArr.forEach(item => {
    foo.append(item);
  });
  foo.reverseList();
  let arr = [];
  const callback = val => {
    arr.push(val);
  };
  foo.map(callback);
  t.deepEqual(
    arr,
    tempArr.reverse(),
    "~> returns `true` when two array is equal"
  );
});

test("isCycle", t => {
  let foo = new LinkedList();
  let tempArr = [1, 34, 374, 565, 45, 20];
  tempArr.forEach(item => {
    foo.append(item);
  });
  t.is(foo.isCycle(), false, "~> returns `false` when linkedlist is not cycle");
  foo.findByIndex(5).next = foo.findByIndex(1);
  t.is(foo.isCycle(), true, "~> returns `true` when linkedlist is cycle");
});

test("mergeLinkedList", t => {
  let foo = new LinkedList();
  const fooArr = [0, 0, 0, 0, 0];
  fooArr.forEach(item => foo.append(item));

  let bar = new LinkedList();
  const barArr = [1, 3, 5, 7, 9];
  barArr.forEach(item => bar.append(item));
  const mergeList1 = LinkedList.mergeLinkedList(foo, bar);
  const arr1 = listToArr(mergeList1);
  t.deepEqual(
    arr1,
    fooArr.concat(barArr).sort(),
    "~> returns `true` when merge list1 all value < list2"
  );

  const mergeList2 = LinkedList.mergeLinkedList(bar, foo);
  const arr2 = listToArr(mergeList2);
  t.deepEqual(
    arr2,
    fooArr.concat(barArr).sort(),
    "~> returns `true` when merge list2 all value > list1"
  );

  const eqq = new LinkedList();
  const eqqArr = [0, 2, 4, 6, 8];
  eqqArr.forEach(item => eqq.append(item));
  const mergeList3 = LinkedList.mergeLinkedList(eqq, bar);
  const arr3 = listToArr(mergeList3);

  t.deepEqual(
    arr3,
    eqqArr.concat(barArr).sort(),
    "~> returns `true` when merge two random list"
  );
});
