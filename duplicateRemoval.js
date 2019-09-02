
//Objective: remove the duplicate values in array1
let array1 = [1,2,3,3,4,2,5,7,1]

let array2 = []

for(let eachValue of array1){
    if(array2.indexOf(eachValue) === -1){
      array2.push(eachValue)
    }
}

console.log(array2) //returns [ 1, 2, 3, 4, 5, 7 ]




//Objective: remove the duplicate values in array1

array1 = Array.from(new Set(array1))


console.log(array1) //returns [ 1, 2, 3, 4, 5, 7 ]
