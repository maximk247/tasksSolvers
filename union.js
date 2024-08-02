var array1 = [5, 2, 1, -10, 8];
var array2 = [5, 2, 1, -9, 3, 7]; 

var union = function(array1, array2) {
    const minArr = array1.length < array2.length ? array1.slice(0): array2.slice(0)
    const maxArr = array1.length > array2.length ? array1.slice(0): array2.slice(0)
    for (let i = 0; i < maxArr.length; i++) {
        if(!maxArr.includes(minArr[i]) && minArr[i] !== undefined) {
            maxArr.unshift(minArr[i])
        }
    }
    return maxArr.sort()
}

console.log(union(array1, array2)); // [-10,8,5,2,1,-9,3,7] 