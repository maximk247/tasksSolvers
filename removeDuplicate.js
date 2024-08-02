var arr = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java"
];
function removeDuplicates(array) {
    const result = []
    const obj = {}
    for (let i = 0; i < array.length; i++) {
        if(!obj[array[i]]) {
            obj[array[i]] = true
            result.push(array[i])
        }
    }
    return result
}

console.log(removeDuplicates(arr));  // [php,css,script,html,java] 