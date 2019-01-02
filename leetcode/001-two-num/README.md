Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

*Example:*
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```


## 结题思路
第一时间想到的就是遍历。通过累加循环判断。核心思路如下
```
function sum(nums, target) {
	const l = nums.length;
	for(let i = 0; i < l; i++) {
		for(let j = 1; j < l; j++) {
			console.log(a[i], a[j])
			if(nums[i] + nums[j] === target) return [i, j];
		}
	}
}
```

这种 O(N*N) 的方式真的是最烂的了。我们多那么一次 for 循环是因为没有利用好已知关系。
遍历的时候第一次已知是 2，那么我们知道第二个必然是 target - 2。而不用去遍历查找这个值了。

我们可以利用数组下标来帮我搞定这个事情，首先需要将数组做一次转换。
```
let newNum = []
for(let i = 0; i < nums.length; i++) {
	newNum[nums[i]] = i;
}
```
以上代码是我们将数组的值转换为数组的下标。

```
function getNums(nums) {
	let newNums = [];
	for(let i = 0; i < nums.length; i++) {
		newNums[nums[i]] = i;
	}
	return newNums;
}
function sum(nums, target) {
	const newNums = getNums(nums);
	for(let i = 0; i < nums.length; i++) {
		let gap = target - nums[i];
		if(newNums[gap])	 return [i, newNums[gap]]
	}
}
```

虽然这么做题目的 case 过了，但是还是 Wrong。原因是最后的判断有些瑕疵。
比如当输入为
```
[1,3,4,2]
6
```
我返回的结果是[1,1] 而实际期望输出应该是 [2,3]。
原因就是我用了两个相同的数相加了。

```
if(newNums[gap] && i !== newNums[gap])	 return [i, newNums[gap]];
```


AC:
```
var twoSum = function(nums, target) {
    const newNums = getNums(nums);
	for(let i = 0; i < nums.length; i++) {
		let gap = target - nums[i];
        let result = newNums[gap] 
		if(result && i !== result)	 return [i, result];
	}
};

function getNums(nums) {
	let newNums = [];
	for(let i = 0; i < nums.length; i++) {
		newNums[nums[i]] = i;
	}
	return newNums;
}
```


性能更好的做法。在我刚才实现的方式里先做了一次遍历转换数据再进行遍历计算。但这一步可以优化：
每次遍历的时候把上一个结果保存到对象里，这样可以确保存储的数据是最小的。
```
var twoSum = function(nums, target) {
	var hash = {};
	for(let i = 0, l = nums.length; i < l; i++) {
		let gap = target - nums[i];
		let result = hash[gap];
		if(result!== undefined) return [result, i];
		else hash[nums[i]] = i;
	}
}
```

