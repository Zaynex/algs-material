import SelectionSort from "./SelectionSort";
import test from "ava";

test("SelectionSort", t => {
  let arr = [4, 5, 6, 1, 3, 2];
  let result = SelectionSort(arr);
  let exceptResult = [1, 2, 3, 4, 5, 6];
  t.deepEqual(
    result,
    exceptResult,
    `~> returns true after bubblesort and native sort`
  );

  let bar = [3, 4, 5, 1, 2, 6];
  let barResult = SelectionSort(bar);
  t.deepEqual(
    barResult,
    exceptResult,
    `~> returns true after bubblesort and native sort`
  );
});
