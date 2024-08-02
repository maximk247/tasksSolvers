function removeDupes(str) {
    const char = {}
    const result = []

    for (let i = 0; i < str.length; i++) {
        if(!char[str[i]]) {
            char[str[i]] = true
            result.push(str[i])
        }
        
    }

    return result
}


console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'