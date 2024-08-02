var str = 'Каждый охотник желает знать';
function stringToarray(str) {
    return str.split(' ')
};

var arr = stringToarray(str);

console.log(arr);; // ['Каждый', 'охотник', 'желает', 'знать']