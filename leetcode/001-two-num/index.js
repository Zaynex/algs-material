// one
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


// two
var twoSum = function(nums, target) {
	var hash = {};
	for(let i = 0, l = nums.length; i < l; i++) {
		let gap = target - nums[i];
		let result = hash[gap];
		if(result!== undefined) return [result, i];
		else hash[nums[i]] = i;
	}
}
