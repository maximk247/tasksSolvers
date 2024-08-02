var str = "Каждый охотник желает знать"; 
var str1 = "скрипт";
var str2 = "знать";

String.prototype.endsWith = function(substring) {
    
};

document.writeln(str.endsWith(str1)); // false
document.writeln(str.endsWith(str2)); // true