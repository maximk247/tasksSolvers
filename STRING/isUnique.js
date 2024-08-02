function isUnique(string) {
    const result = []
	for(let i = 0; i < string.length; i++) {
        if(string.indexOf(string[i]) == string.lastIndexOf(string[i])) {
            result.push(string[i])
        }
        else {
            result.push(string[string.indexOf(string[i])])
        }
    }
    return result
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
console.log(isUnique([1,1,2])); // -> [1,2]