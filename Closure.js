
function outterFunction(){
  let x =10;

  return function innerFunction(){
    return x + 1
  }
  
}

let me = outterFunction()

console.log(me())
