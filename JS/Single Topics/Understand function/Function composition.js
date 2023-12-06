// f(g(d(x))) 

function sum(a, b){
    return a+b
}

function age(x){
    return x
}

function ageSum(x, y){
    return x+y
}

console.log(ageSum(age(sum(2, 5)), age(sum(3, 5))))