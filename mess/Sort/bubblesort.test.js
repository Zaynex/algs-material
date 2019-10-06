import BubbleSort from "./BubbleSort";
import test from "ava";

test("bubblesort", t => {
  let arr = [4, 5, 6, 3, 2, 1];
  let exceptResult = [1, 2, 3, 4, 5, 6];
  let result = BubbleSort(arr);
  t.deepEqual(
    result,
    exceptResult,
    `~> returns true after bubblesort and native sort`
  );

  let bar = [3, 4, 5, 1, 2, 6];
  let barResult = BubbleSort(bar);
  t.deepEqual(
    barResult,
    exceptResult,
    `~> returns true after bubblesort and native sort`
  );
});
