var str = "вишня, груша, слива, груша";

function removeDuplicate(str) {
    const char = {}
    const result = []

    str = str.split(', ')
    console.log(str);

    for (let i = 0; i < str.length; i++) {
        if(!char[str[i]]) {
            char[str[i]] = true
            result.push(str[i])
        }
    }
    return result
};

document.writeln (removeDuplicate(str)); // вишня, груша, слива