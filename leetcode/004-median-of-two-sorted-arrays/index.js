
// function merge(left ,right) {
//     let result = [];
//     while(left.length > 0 && right.length > 0) {
//         if(left[0] < right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }
//     // 如果剩下还有，直接 concat
//     return result.concat(left, right);
// }
// function mergeSort(arr) {
//     if(arr.length == 1) return arr;
//     let middle = Math.floor(arr.length / 2);
//     let left = arr.slice(0, middle);
//     let right = arr.slice(middle);
//     return merge(mergeSort(left), mergeSort(right));
// }

// var findMedianSortedArrays = function(nums1, nums2) {
//     let nums3 = nums1.concat(nums2);
//     let sorted = mergeSort(nums3);
//     let length = sorted.length;
//     if(length % 2 === 1) {
//         return sorted[Math.floor(length / 2)];
//     } else {
//         return (sorted[length / 2 - 1] + sorted[length / 2]) / 2;
//     }
// };

var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = 0,n2 = 0;
    let arr = []
    for(let i = 0; i < (nums1.length + nums2.length); i++) {
        if(nums2[n2] !== undefined && nums1[n1] !== undefined) {
            if(nums1[n1] < nums2[n2]) {
                arr.push(nums1[n1])
                n1++
            } else {
                arr.push(nums2[n2])
                n2++;
            }
        } else {
            break;
        }
    }
    if(n1 < nums1.length) {
        arr.push(...nums1.slice(n1));
    }
    if(n2 < nums2.length) {
        push(...nums2.slice(n2))
    }
    let length = arr.length;
    if(length % 2 == 1) {
        return arr[Math.floor(length / 2)]
    } else {
        return (arr[length / 2] + arr[length / 2 - 1]) /2
    }
}

nums1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]

nums2 = [0,6]


console.log(findMedianSortedArrays(nums1, nums2));