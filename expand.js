var str1 = [1, [2,[3,[4]]]];
var str2 = [1, [2], [3, [[4]]],[5,6]];

function flatten(arr) {
    const result = [];
    
    for (const n of arr) {
      if (n.constructor === Array) {
        result.push(...flatten(n))
      } else {
        result.push(n);
      }
    }
    
    return Array.from(result);
  }

console.log(flatten(str1)); // 1,2,3,4
console.log(flatten(str2)); // 1,2,3,4,5,6