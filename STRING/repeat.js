function repeatStr(str, n) {
    const result = []
    while( n > 0) {
        result.push(str)
        n--
    }
    return result.join('')
};

document.writeln(repeatStr('Hello!', 3)); // Hello!Hello!Hello!