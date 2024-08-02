var str = "каждый охотник желает знать";  
 
function capitalize(str) {
    const result = str.split(' ').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')
    return result
}

document.writeln(capitalize(str)); // "Каждый Охотник Желает Знать"