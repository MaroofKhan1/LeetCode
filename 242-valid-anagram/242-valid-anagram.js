/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const sSorted = s.split("").sort().join("")
    const tSorted = t.split("").sort().join("")
    return sSorted === tSorted
};


// Time Complexity : NlogN + Mlogn