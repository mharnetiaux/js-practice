let twoSum = function(nums, target) {
    let myStore = {};

    for(let i=0; i < nums.length; i++){

        if(myStore.hasOwnProperty(nums[i])){
            return [myStore[nums[i]],i];
        }

        myStore[target-nums[i]] = i;
    }
};

console.log(twoSum([1,2,1,1,2],3));

