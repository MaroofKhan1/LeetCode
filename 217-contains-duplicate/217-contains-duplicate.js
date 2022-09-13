/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {

    
    let memory = {};
    for(let i = 0; i < nums.length; i++){
        if(memory[nums[i]] == undefined){
            memory[nums[i]] = "hello"
        } else {
            return true
        }
    }
    return false;
};

