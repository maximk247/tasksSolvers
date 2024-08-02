var arr1 = [1, 2, 'a'];
var arr2 = [1, 2, 3, 4, 'b'];  

function arrayDiff(array1, array2) {
    const result = []
    const minArr = array1.length < array2.length ? array1.slice(0): array2.slice(0)
    const maxArr = array1.length > array2.length ? array1.slice(0): array2.slice(0)
    for (let i = 0; i < maxArr.length; i++) {
        if(!maxArr.includes(minArr[i]) && minArr[i] !== undefined) {
            result.push(minArr[i])
        } 
        
        if(!minArr.includes(maxArr[i]) && maxArr[i] !== undefined) {
            result.push(maxArr[i])
        }
    }
    return result
}

console.log(arrayDiff(arr2, arr1)); // [a,3,4,b]