
function merge(left ,right) {
    let result = [];
    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    // 如果剩下还有，直接 concat
    return result.concat(left, right);
}
function mergeSort(arr) {
    if(arr.length == 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = nums1.concat(nums2);
    let sorted = mergeSort(nums3);
    let length = sorted.length;
    if(length % 2 === 1) {
        return sorted[Math.floor(length / 2)];
    } else {
        return (sorted[length / 2 - 1] + sorted[length / 2]) / 2;
    }
};

findMedianSortedArrays(nums1, nums2);