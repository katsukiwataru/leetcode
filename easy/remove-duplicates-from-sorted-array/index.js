var removeDuplicates = function(nums) {
  nums.forEach((n, index) => {
    while(n == nums[index +1]){
      nums.splice(index +1, 1);
    }
  });

  return nums.length;
};
