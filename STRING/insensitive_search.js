function insensitive_search(str1, str2) {
    return str1.toLowerCase().includes(str2.toLowerCase())
};

document.writeln(insensitive_search('Изучаю JavaScript', 'javascript')); 
// Соответствует 
document.writeln(insensitive_search('Изучаю JavaScript', 'javascriptS'));
// Не соответствует  