var arr1 = ['Капуста', 'Капитал', 'Капля', 'Капитан'];
var arr2 = ['Репа', 'Редиска'];
function startingSubstring(arr) {
    let start = {}
    const result = []
    const substr = arr.map((item,index) => {
        if((arr[index + 1]) == undefined) {
            return
        }
        let element = item.split('')
        let nextElement = arr[index + 1].split('')
        for (let i = 0; i < element.length; i++) {
            if(element[i] == nextElement[i]) {
                start[element[i]] = true
            }
        }
        return element
    })

    for (const key in start) {
        if (Object.hasOwnProperty.call(start, key)) {
            const element = key;
            result.push(element)
        }
    }
    return result
}

var res1 = startingSubstring(arr1);
var res2 = startingSubstring(arr2);

console.log(res1); // Кап
console.log(res2); // Ре