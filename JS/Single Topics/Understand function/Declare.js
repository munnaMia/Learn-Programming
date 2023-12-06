function testFunction(a=10, b){ // a and b is parameter
    b = 3;
    return console.log(Math.max(a, b))
}
testFunction()
testFunction(23, 5) 
 