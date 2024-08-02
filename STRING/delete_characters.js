var str = 'Каждый охотник желает знать';
function delete_characters(str, length) {
    let result = str.split('').splice(0, length).join('')
    return result
};

console.log(delete_characters(str, 7));; // Каждый