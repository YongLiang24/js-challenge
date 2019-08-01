
// The indexOf() method returns the position of the first occurrence 
// of a specified value in a string.

// This method returns -1 if the value to search for never occurs.

function findIndex(str){
    let n = str.indexOf("w");

    return n;
}

findIndex("w")


function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])
