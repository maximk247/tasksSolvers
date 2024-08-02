var str = 'abc def ghi jkl mno pqr stu';

String.prototype.startsWith = function(start) {
    
    return this.split(' ')
};

document.writeln(str.startsWith('abc')); // true