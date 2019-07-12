
//Two arrays have the same character counts
function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  let strObject = {};
  let strObject2 ={};
  if(str1.length !== str2.length){
    return false
    }
  else{
    for(const eachChar of str1){
      strObject[eachChar]? strObject[eachChar]++ : strObject[eachChar] =1
    }

  for(const eachChar of str2){
      if(!strObject[eachChar]){
         return false
      }
      else{
         strObject[eachChar] -=1;
       }
    }
    return true
  }

  
}

validAnagram("mememem", "emmemem")
