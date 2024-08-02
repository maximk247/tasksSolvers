function limitStr(str, n = 0, symb = '') {
    if(n == 0) {
        return str
    } else if(n !== 0 && symb == '') {
        symb = '...'
        const result = str.slice(0, n - symb.length) + symb
        return result
    } else if(n !== 0 && symb !== '') {
        const result = str.slice(0, n - symb.length) + symb
        return result
    }

};

document.writeln(limitStr('Каждый охотник желает знать.')); // Каждый охотник желает знать.
document.writeln(limitStr('Каждый охотник желает знать.',17)); // Каждый охотник...
document.writeln(limitStr('Каждый охотник желает знать.',22,'!')); // Каждый охотник желает!