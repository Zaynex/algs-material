import test from 'ava';
import LRU from './LRU';

const isObject = x => Object.prototype.toString.call(x) === '[object Object]';

test('exports', t => {
  let keys = ['has', 'clear', 'get', 'set'];
  t.is(typeof LRU, 'function', 'exports a function');

  let lru = new LRU();
  t.true(isObject(lru), 'works with `new` keyword');
  keys.forEach(k => {
    t.is(typeof lru[k], 'function', `~> has "${k}" method`)
  })
})

test('has()', t => {
  let key = 'a';
  let foo = new LRU(3);
  foo.set(key, 1);
  t.is(foo.has(key), true, '~> returns `true` when known');
  t.is(foo.has('foobar'), false, '~> returns false when unknown');
})

test('clear()', t => {
  let foo = new LRU(3);
  let keys = ['a', 'b', 'c'];

  keys.forEach((key, index) => {
    foo.set(key, index);
  });

  keys.forEach(k => {
    t.true(foo.has(k), `(pre) key "${k}" exists`);
  })

  t.is(foo.clear(), undefined, `~> clear() returns nothing`);

  keys.forEach(k => {
    t.false(foo.has(k), `(post) key "${k}" unknown`);
  })
})

test('ordering', t => {
  let foo = new LRU(3);
  const keys = (arr, bool) => t.is(arr.every((item) => foo.has(item)), bool, `[${arr.toString()}] ~> ${bool ? '' : 'un'}known`);

  ['a', 'b', 'c'].forEach((item, index) => {
    foo.set(item, index);
  })

  keys(['a', 'b', 'c'], true);

  t.pass(`>> set('d')`); // A = [d, a, b]
  t.is(foo.set('d', 4), undefined, '~> returns nothing');
  keys(['d', 'c', 'b'], true);
})