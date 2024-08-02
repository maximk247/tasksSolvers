var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6];

const arr3 = function(arr1, arr2) {
    let length = arr1.length > arr2.length ? arr1.length: arr2.length
    const result = []
    for(let i = 0; i < length; i++) {
        if(isNaN(arr1[i])) {
            arr1[i] = 0
        } else if (isNaN(arr2[i])) {
            arr2[i] = 0
        }
        result.push(arr1[i] + arr2[i])
    }
    return result
}

document.writeln(arr3(arr1, arr2)); // [5,7,9,4,5]  