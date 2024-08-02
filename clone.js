var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(array) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i])
    }
    return result
}

var arr1 = arrayClone(vegetables);

document.writeln(arr1); // ['Капуста', 'Репа', 'Редиска', 'Морковка']