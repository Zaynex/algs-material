# Median of Two Sorted Arrays
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

*Example 1:*
```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

*Example 2:*
```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

## 解题
这道题要求运行时间是 log(m+n)，难度为 hard。
首先想到的是归并排序，可以利用数组有序的已知条件排序。

虽然通过了，但是速度很悲观。
