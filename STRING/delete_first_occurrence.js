var str = "вишня, груша, слива, груша";

function delete_first_occurrence(str, subst) {
    str = str.split(', ')
    const indexOfSubst = str.indexOf(subst);
    for (let i = 0; i < str.length; i++) {
        if(indexOfSubst == i) {
            str.splice(i, 1)
        }
    }
    return str.join(', ')
};

document.writeln(delete_first_occurrence(str, 'груша')); // 'вишня, слива, груша'