function chooseYears(start, end) {
    const result = []
    let currentYear = start
    while(currentYear !== end) {
        if(currentYear % 4 == 0) {
            result.push(currentYear)
        }
        currentYear++
    }
    return result
}
    
document.writeln(chooseYears(2000,2018)); // [2000,2004,2008,2012,2016]