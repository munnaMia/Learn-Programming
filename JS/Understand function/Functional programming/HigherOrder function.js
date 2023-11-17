// Higher order function 
//     1. function can be passed as an argument or value
//     2. function can be return from another function

/**
 * Hidden consepts:
 *  - Scope
 *  - Closure
 *  - Function creation life cycle | Function context
 *  - Hoisting
 */

// function randSum(max){
//     const rand1 = Math.floor(Math.random() * max)
//     const rand2 = Math.floor(Math.random() * max)
//     return rand1 + rand2
// }


// function randSub(max){
//     const rand1 = Math.floor(Math.random() * max)
//     const rand2 = Math.floor(Math.random() * max)
//     return rand1 - rand2
// }

function randWork(whatWork){
    const rand1 = Math.floor(Math.random() * 10)
    const rand2 = Math.floor(Math.random() * 10)

    const result = whatWork(rand1, rand2)
    return result
}


console.log(randWork((rand1, rand2) => {
    return rand1 + rand2
}))

