function countIdentic(arr) {
    let count = 0
    const check = {}
    for (let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            if(!check[arr[i]]) {
                check[arr[i]] = true
            }
        }
    }
    count = Object.keys(check).length
    return count
}

console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])) // 4
console.log(countIdentic([15,14,13,19,13,14,14,14,7,9,9])) // 3  