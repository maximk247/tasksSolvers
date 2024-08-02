function zeros (num, len, sign = '') {
    return sign + num.toString().padStart(len,'0')
};

console.log(zeros(145, 5, '-')); // -00145
console.log(zeros(33, 4, '+'));  // +0033 
console.log(zeros(33, 4));       // 0033 