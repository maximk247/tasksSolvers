var str = [1,2,3,4,5,6,7,8,9];

 function getFirst(str, n = 0) {
    let currentEl = 0,
        endElForNegative = str.length - (-n);
    const result = []
    for (let i = 0; i < str.length; i++) {
        if(i == currentEl && i !== n && n >= 0) {
            result.push(str[i])
            currentEl++
        } else if( n == 0 && i == n) {
            result.push(str[0])
        } else if( n < 0 && currentEl == i && i !== endElForNegative) {
            result.push(str[i])
            currentEl++
        }
    }
    return result
};

console.log(getFirst(str));    // 1
console.log(getFirst(str, 4)); // 1,2,3,4
console.log(getFirst(str,-3)); // 1,2,3,4,5,6
console.log(getFirst(str,-6)); // 1,2,3,4,5,6 