import test from "ava";
import LRU from "./LRU";

const isObject = x => Object.prototype.toString.call(x) === "[object Object]";

test("exports", t => {
  let keys = ["has", "clear", "get", "set"];
  t.is(typeof LRU, "function", "exports a function");

  let lru = new LRU();
  t.true(isObject(lru), "works with `new` keyword");
  keys.forEach(k => {
    t.is(typeof lru[k], "function", `~> has "${k}" method`);
  });
});

test("set()", t => {
  let foo = new LRU(3);
  foo.set("k", 1);
  t.is(foo.stack.length, 1, "~> returns true if stack length add");
  foo.set('k2', 2);
  foo.set('k3', 3);
  foo.set('k4', 4);
  t.deepEqual(foo.stack, [['k4', 4], ['k3', 3], ['k2', 2]], "~> returns true");
  foo.set('k2', 2);
  t.deepEqual(foo.stack, [['k2',2], ['k4', 4], ['k3',3]]);
});

test("get()", t => {
  let foo = new LRU(3);
  foo.set("k", 1);
  t.is(foo.get("k"), 1, "~> returns true if get the value");
  t.is(
    foo.get("notexist"),
    undefined,
    "~> returns undefined if not find the value"
  );
});

test("has()", t => {
  let key = "a";
  let foo = new LRU(3);
  foo.set(key, 1);
  t.is(foo.has(key), true, "~> returns `true` when known");
  t.is(foo.has("foobar"), false, "~> returns false when unknown");
});

test("clear()", t => {
  let foo = new LRU(3);
  let keys = ["a", "b", "c"];

  keys.forEach((key, index) => {
    foo.set(key, index);
  });

  keys.forEach(k => {
    t.true(foo.has(k), `(pre) key "${k}" exists`);
  });

  t.is(foo.clear(), undefined, `~> clear() returns nothing`);

  keys.forEach(k => {
    t.false(foo.has(k), `(post) key "${k}" unknown`);
  });
});

test("ordering", t => {
  let foo = new LRU(3);
  const keys = (arr, bool) =>
    t.is(
      arr.every(item => foo.has(item)),
      bool,
      `[${arr.toString()}] ~> ${bool ? "" : "un"}known`
    );

  ["a", "b", "c"].forEach((item, index) => {
    foo.set(item, index);
  });

  keys(["a", "b", "c"], true);

  t.pass(`>> set('d')`); // A = [d, c, b]
  t.is(foo.set("d", 4), undefined, "~> returns nothing");
  keys(["d", "c", "b"], true);
  keys(["a"], false);
});
