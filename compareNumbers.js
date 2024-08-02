var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];  

function compareNumbers(arr){
    if(arr.length <= 1) {
        return arr
    }
   const pivotIndex = Math.floor(arr.length/2)
   const pivot = arr[pivotIndex]
   const less = []
   const greater = []

   for (let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            less.push(arr[i])
        } else if(pivot < arr[i]) {
            greater.push(arr[i])
        }
   }

   return Array.from([...compareNumbers(less), pivot, ...compareNumbers(greater)])
}

console.log(compareNumbers(numbers)); // -4,1,2,3,3,5,6,7,8