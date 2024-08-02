var str = "HTML JavaScript PHP";

function insert_dash(str) {
    return str.split(' ').join('-').toUpperCase()
}

console.log(insert_dash(str));; // 'HTML-JAVASCRIPT-PHP'