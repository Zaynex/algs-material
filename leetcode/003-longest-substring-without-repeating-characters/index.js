/**
 * @param {string} s
 * @return {number}
 * 
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length <= 1) return s.length
  let arr = []
  let maxLength = 0
  for(let i = 0; i < s.length; i++) {
    const index = arr.findIndex(item => item === s[i]);
    if(index < 0) {
      arr.push(s[i])
    } else {
      arr.splice(0, index + 1)
      arr.push(s[i])
    }
    maxLength = Math.max(arr.length, maxLength);
  }

  return maxLength
};

var lengthOfLongestSubstring2 = function(s) {
  let map = new Map();
  let maxLength = 0;
  for(let i = 0, j = 0; i < s.length; j++) {
    // 使用 i 来标记无重复子串开始下标
    let result = map.has(s[j]);
    if(result) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    maxLength = Math.max(maxLength, j - i + 1);
    map.set(s[j], j)
  }
  return maxLength
}

console.log(lengthOfLongestSubstring("aulowkslssdsd"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("au"))
console.log(lengthOfLongestSubstring("dvdf"));
