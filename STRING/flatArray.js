function flatten(array) {
    const result = []
    
    for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            const flatt = flatten(array[i])
            for(let j = 0; j < flatt.length; j++) {
                result.push(flatt[j])
            }
        } 
        else {result.push(array[i])}
    }

    return result
  }
  
  console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]