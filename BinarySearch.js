
//O(log n)
function binSearch(arr, target){
    let startPosition =0;
    let endPosition = arr.length -1;
    let midPostion = Math.floor((startPosition + endPosition) /2);
    console.log(arr.length)
    while(startPosition <= endPosition){
       midPostion = Math.floor((startPosition + endPosition) /2);
       console.log(midPostion)
       if(target == arr[midPostion]){
           console.log("target found at index:", midPostion);
           return true;
         }
        else if(arr[midPostion] < target){
            startPosition = midPostion +1;
            //console.log("target not yet found");
        }
        else{
            endPosition = midPostion -1;
            //console.log("target not yet found");
        }

    }

    return false;
}

binSearch([1,1,2,3,4,5,6], 4)
//A binary search works by finding the middle element of a sorted array 
//and comparing it to your target element. Based on what you find, 
//you either use the left or right half of the array and update the start 
//and ending indexes until you either do or do not find the element.
