/**
 * BubbleSort 冒泡排序
 * 每次冒泡都将两个相邻的元素比较，若不满足则交换位置
 * 每次冒泡都将产生一个最大的数
 * @param {number} arr
 */
function BubbleSort(arr) {
  if (arr.length <= 1) return arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

module.exports = BubbleSort;
