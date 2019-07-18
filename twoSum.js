
//nested loop solution
function twoSum(numArray, numTarget)
{
 const arraySize = numArray.length;

 for(let i = 0; i < arraySize; i++){

     for(let j= i + 1; j < arraySize; j++){

       if(numTarget - numArray[i] === numArray[j]){

          return `The sum of indices ${i} and ${j} equals ${numTarget}` 
        }
     }
  }
 return "target not found."
}

//object or hash table solution
function twoSum(numArray, target){

  const numObject = {} //create an empty object

  for(let eachNum in numArray){

    const otherNum = target - numArray[eachNum]

    if(otherNum in numObject){

      return `${otherNum} + ${numArray[eachNum]} = ${target}`
    }

    numObject[numArray[eachNum]] = eachNum

//adding key/value has to go after the if statement to avoid adding the same index twice.
  }

  return "target not found"
}
