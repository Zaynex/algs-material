/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = s.length;
  if(l < 2 ) return l;
  let maxLength = 0;
  let maxWord = [];
  for(let i = 0; i < l; i++) {
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


console.log(lengthOfLongestSubstring("aulowkslssdsd"));