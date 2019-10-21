/**
 * 归并排序 -> 分而治之
 * 最终的问题就成了如何合并两个有序数组
 */
function MergeSort(arr) {
  if(arr.length <= 1) return arr;
  const center = Math.floor((arr.length) / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  const leftResult = MergeSort(left);
  const rightResult = MergeSort(right);
  return _mergeSortedArr(leftResult, rightResult);
}


function _mergeSortedArr(left, right) {
  let i = 0;
  let j = 0;
  let p = 0;
  let tempArr = [];
  while(left.length > i && right.length > j) {
    if(left[i] <= right[j]) {
      tempArr[p] = left[i];
      i++;
    } else {
      tempArr[p] = right[j];
      j++;
    }
    p++;
  }

  // 加入余下未被添加进来的数组
  while(left.length > i) {
    tempArr.push(left[i]);
    i++;
  }

  while(right.length > j) {
    tempArr.push(right[j])
    j++;
  }
  return tempArr;
}

module.exports = MergeSort;