import test from "ava";
import MergeSort from './MergeSort';

test("MergeSort", t => {
  let arr = [4, 5, 6, 1, 3, 2];
  let result = MergeSort(arr);
  let exceptResult = [1, 2, 3, 4, 5, 6];
  t.deepEqual(
    result,
    exceptResult,
    `~> returns true after mergeSort and native sort`
  );

  let bar = [3, 4, 5, 1, 2, 6];
  let barResult = MergeSort(bar);
  t.deepEqual(
    barResult,
    exceptResult,
    `~> returns true after mergeSort and native sort`
  );
});