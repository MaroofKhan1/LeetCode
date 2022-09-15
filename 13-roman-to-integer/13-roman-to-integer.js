/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        "I":1,
        "IV":4,
        "V":5,
        "IX":9,
        "X":10,
        "XL":40,
        "L":50,
        "XC":90,
        "C":100,
        "CD":400,
        "D":500,
        "CM":900,
        "M":1000
    };
    
    let results = 0;
    const length=s.length;
    for( let i=0; i < length; i++ ) {
       let subtractCaseCheck = s[i] + s[i+1];
        if( map[subtractCaseCheck] ) {
            results += map[subtractCaseCheck];
            i=i+1;
        } else {
            results += map[s[i]];
        }
    }
       
    return results;
};