var str = 'abc def def lom abc abc def';

function replaceAll(find, replace, str) {
    str = str.split(' ')
    for (let i = 0; i < str.length; i++) {
        if(str[i] == find) {
            str[i] = replace
        }        
    }
    return str.join(' ')
};

document.writeln(replaceAll('abc', 'x', str)); // 'x def def lom x x def'