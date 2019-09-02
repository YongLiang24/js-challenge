
function charCount(str){
    let obj = {} //empty object
//     str = str.replace(/ /g, '');
//     console.log(str)
    for(let i =0; i <str.length; i++){

        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(obj[char] > 0){
                obj[char]++;
            }
            else{
                obj[char] =1;
            }
        }
    }
    return obj;
}

//use regex to remove space example: let varSpace ="foo is bar".replace(/ /g, '')
//obj[key] = 1 to add key/value pair to object
//var char = str[i].toLowerCase();
//"h".charCodeAt(0) use this to replace the regex

charCount("my name is name")
