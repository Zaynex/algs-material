/**
 * LRU （Least recently uesd， 最近最少使用）算法
 * 源自操作系统内存管理中清空旧缓存的一种算法实现。
 * 核心思想： 如果数据最近被访问过，那么将来被访问的几率也很大。
 * 在有限的缓存空间下，当新的缓存进来时，需要将旧的缓存淘汰掉。
 * 如何筛选去除旧的缓存呢 ？依据核心思想，我们找到最久未被访问的，淘汰之。
 */

const hasIndex = (stack, key) => {
  return stack.findIndex(([cacheKey]) => cacheKey === key);
}

class LRU {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  set(key, val) {
    const searchIndex = hasIndex(this.stack, key);
    // 判断是否存在
    if(searchIndex !== -1) {
      // 如果存在，移除原先该项所在位置
      this.stack.splice(searchIndex, 1);
      // 并将该项插入到栈的顶部
      this.stack.unshift([key, val]);
      return;
    }

    // 不存在的话
    // 1. 栈未满 2.栈满
    if(this.stack.length < this.maxSize) {
      this.stack.unshift([key, val]);
      return;
    }

    // 栈满的情况
    this.stack.pop();
    this.stack.unshift([key, val]);
  }

  has(key) {
    return hasIndex(this.stack, key) !== -1;
  }

  get(key) {
    const result = this.stack.find(([cacheKey]) => cacheKey === key);
    if(result) return result[1];
    return undefined;
  }

  clear() {
    this.stack = [];
  }
}

module.exports = LRU;