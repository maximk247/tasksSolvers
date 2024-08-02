var symb = "о", str = "Астрономия это наука о небесных объектах";
function count(str, symb) {
    let result = 0
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(element == symb) {
            result += 1
        }
    }
    return result
};

document.writeln(count(str, symb)) // 5