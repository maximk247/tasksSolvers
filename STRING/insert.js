function insert(str, substr = '', pos = 0) {
    if(pos == 0) {
        let result = str.split(' ')
        result.unshift(substr)
        return result.join(' ').trim()
    } else {
        let result = str.split('').map((item, index) => {
            if(index == pos - 1) {
                item = ' '+substr
            }
            return item
        }).join('').trim()
        return result
    }
};

console.time('Время начччала')
console.log(insert('Казнить нельзя')); // Казнить нельзя
console.log(insert('Казнить нельзя', 'Помиловать')); // Помиловать Казнить нельзя 
console.log(insert('Казнить нельзя', 'Помиловать ', 8)); // Казнить Помиловать нельзя
console.timeEnd('КОнец')