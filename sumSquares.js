function sumOfSquares(arr) { 
    return arr.reduce((previousItem, currentItem) => (previousItem) + (currentItem * currentItem))
}

console.log(sumOfSquares([1, 2, 3, 4, 5])); // 55