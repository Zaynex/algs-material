import test from 'ava';
import LinkedList from './SingleLinkedList';

const isObject = x => Object.prototype.toString.call(x) === '[object Object]';
const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

test('exports', t => {
  let keys = ['append', 'findByValue', 'insert', 'findPrev', 'remove', 'findByIndex', 'map'];
  t.is(typeof LinkedList, 'function', 'exports a function');

  let linkList = new LinkedList();
  t.true(isObject(linkList), 'works with `new` keyword');
  keys.forEach(k => {
    t.is(typeof linkList[k], 'function', `~> has "${k}" method`)
  })
})

test('append', t => {
  let foo = new LinkedList();
  t.is(foo.append('111'), true, '~> returns `true` when known');
})

test('findByValue (111)', t => {
  let foo = new LinkedList();
  foo.append('111');
  t.is(foo.findByValue('111').value, '111', '~> returns `111` when match');
  t.is(foo.findByValue('222'), false, '~> returns `false` when not match');
})

test('insert', t => {
  let foo = new LinkedList();
  foo.append('111');
  t.is(foo.insert('111', '222'), true, '~> returns `true` when match');
  t.is(foo.insert('333', '222'), false, '~> returns `false` when note match');
})

test('findPrev', t => {
  let foo = new LinkedList();
  foo.append('111');
  foo.append('222');
  t.is(foo.findPrev('222').value, '111', '~> returns `111` when find prev');
  t.is(foo.findPrev('333'), false, '~> returns `false` when find fail');
})
test('remove', t => {
  let foo = new LinkedList();
  foo.append('111');
  t.is(foo.remove('111'), true, '~> returns `true` when remove success');
  t.is(foo.remove('222'), false, '~> returns `false` when remove fail');
})

test('findIndex', t => {
  let foo = new LinkedList();
  foo.append('111');
  t.is(foo.findByIndex(-1), false, '~> returns `false` when params index not validate');
  t.is(foo.findByIndex(0).value, '111', '~> returns `111` when find index');
  t.is(foo.findByIndex(2), false, '~> returns `false` when not find');
})


test('map', t => {
  let foo = new LinkedList();
  let tempArr = [1,34,34,565,45]
  tempArr.forEach(item => {
    foo.append(item);
  })
  let arr = []
  const callback = (val) => {
    arr.push(val)
  }
  foo.map(callback);
  t.is(arraysEqual(arr, tempArr), true, '~> returns `true` when two array is equal');
})