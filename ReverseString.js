
// function reverseString(str){

//     let revArray = [];
//     // Looping from the end 
//     let strArray = str.split("")
//     for(let i = strArray.length; i >= 0; i--) { 

//         revArray.push(strArray[i]); 
//     } 
      
//     // Joining the array elements 
//     return revArray.join(''); 
// }

function stackReverse(str){
    let strArray = [];

    for(let eachLetter of str){
        strArray.push(eachLetter)
    }

    strArray.reverse();

    return strArray.join("")

}

stackReverse("google amazon")

// function reverseString(str){

//     let strArray = str.split("") 
// //it's important not to add space on the quotation mark here.

//     strArray = strArray.reverse()

//     return strArray.join("");
// }

// reverseString("amazon google apple microsoft facebook")
