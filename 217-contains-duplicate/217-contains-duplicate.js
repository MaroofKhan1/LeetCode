/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    //Create a memory o of 1 
    //Go through array and see if what i seen now, is something i've seen before. 
        //if my item is never seen before put it in memory
        //if the number dose exist in memory, return true
    
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

