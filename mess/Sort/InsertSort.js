/**
 * InsertSort 插入排序
 * 如果当前遍历的数比之前的要小，则将当前遍历的数按大小顺序插入到之前的列表中。
 * 将大的往右移，小的最后插入
 *
 * @param {*} arr
 */

function InsertSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
  return arr;
}

module.exports = InsertSort;
