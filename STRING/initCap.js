let str = "hEllo woRld";
function initCap(str) {
    str = str.toLowerCase().split(' ')
    let result = str.map((item, index) => {
        if(index != 0) {
            item = item.charAt(0).toUpperCase() + item.slice(1)
        }
        return item
    })
    return result.join('')
};

console.log(initCap(str)); // HelloWorld