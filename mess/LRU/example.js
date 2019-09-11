const LRU = require('./LRU');
const lru = new LRU(3);

lru.set('a', 1);
lru.set('b', 2);
lru.set('b', 29);
lru.set('c', 3);