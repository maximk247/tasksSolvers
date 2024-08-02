var arr1=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];  

function output(arr) {
    let result = 0
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = !obj[arr[i]] ? 1: ++obj[arr[i]]
    }

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if(result < element) {
                result = element
            }
        }
    }
    return result
} 

console.log(output(arr1)); // z повторяется 5 раз 