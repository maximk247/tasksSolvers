function cutString(str, n) {
    let result = str.split('').slice(0, n).join('')

    return result.length
};

document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]