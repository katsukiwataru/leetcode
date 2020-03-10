var longestCommonPrefix = function(strs) {
  if(!strs[0]) return "";
  let res = "";
  let cur = "";
  let i = 0;
  while(i < strs[0].length){
    cur = strs[0].substring(0, i + 1);
    let flag = strs.every(x => {
      return x.startsWith(cur);
    })
    if(flag === true){
      res = cur;
    }
    else break;
    i ++;
  }
  return res;
};
