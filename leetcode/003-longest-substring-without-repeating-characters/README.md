Given a string, find the length of the longest substring without repeating characters.

*Example 1:*
```
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3
```

*Example 2:*
```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

*Example 3:*
```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## 解题思路

```js
var lengthOfLongestSubstring = function(s) {
  if(s.length < 2 ) return s.length;
  let maxLength = 0;
  let maxWord = [];
  for(let i = 0, l = s.length; i < l; i++) {
    let index = maxWord.indexOf(s[i]);
    if(index != -1) {
      if(maxWord.length > maxLength) {
        maxLength = maxWord.length;
      }
      maxWord = [];
      maxWord.push(s[i]);
    } else {
      maxWord.push(s[i]);
    }
  }
  return Math.max(maxLength, maxWord.length);
};
```

这样的思路还是有漏洞。
比如当 `dvdf` 时代码输出的是2，而结果应该是 3。
这是因为当我匹配到第二个 d 重复之后，我就把 第二个 d 前面的字母给忽略了，但是 v 是可以作为不重复连续字母的。

所以核心的实现逻辑还是得改一下：
```js
maxWord = maxWord.slice(index + 1, maxWord.length);
```
这样做的目的是比如此时 maxWord 保存的是 ["d", "v"]， 而当 匹配到下一个 "d" 时，可以将 数组 d 后面的所有都保存下来，以便继续累加。


## AC
```js
var lengthOfLongestSubstring = function(s) {
  if(s.length < 2 ) return s.length;
  let maxLength = 0;
  let maxWord = [];
  for(let i = 0, l = s.length; i < l; i++) {
    let index = maxWord.indexOf(s[i]);
    if(index != -1) {
      if(maxWord.length > maxLength) {
        maxLength = maxWord.length;
      }
      maxWord = maxWord.slice(index + 1, maxWord.length);
      maxWord.push(s[i]);
    } else {
      maxWord.push(s[i]);
    }
  }
  return Math.max(maxLength, maxWord.length);
};
```
