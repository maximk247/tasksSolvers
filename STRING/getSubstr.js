var str = 'Астрономия — Наука о небесных телах';

function getSubstr(str, char, pos) {
    let result = ''
    const charIndex = str.indexOf(char)
    switch(pos) {
        case 'after':
            result = str.slice(charIndex + 1)
            break
        case 'before':
            result = str.slice(0, charIndex - 1)
            break
    }
    return result
};

document.writeln(getSubstr(str, '—','after')); // Наука о небесных телах
document.writeln(getSubstr(str, 'Н','before')); // Астрономия —