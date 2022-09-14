/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Time Complexity: NlogN + Mlogn 

const isAnagram = function(s, t) {
    const sSorted = s.split("").sort().join("")
    const tSorted = t.split("").sort().join("")
    return sSorted === tSorted
};

