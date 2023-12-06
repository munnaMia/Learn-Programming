// Pure function work like it take same input and always give a same output always

// this is pure function
function Sum(a, b) {
  return a + b;
}

Sum(2, 3);

//side effect
function limitChange(limit) {
  limit = 400;
  return limit
}
let limit = 100;
limitChange(limit);
console.log(limit); //100


// now we will see a impure function which might change the data of another 
let value = 90
 
function changeVlu(){
    value = 3423
}
changeVlu()
console.log(value) // 3423
