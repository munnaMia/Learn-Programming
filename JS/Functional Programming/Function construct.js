// Construct a function using a constractor
// we can n time of arguments and the last arguments is only will the body 
const fn = new Function(
  "str",
  `let obj = {}
    for(let s of str){
        obj[s] = s
    }
    return obj`
); //Function class


console.log(fn('munna')) //{ m: 'm', u: 'u', n: 'n', a: 'a' }



const fData = {
    params: ['a', 'b'],
    body: ['const r = a+b', 'return r']
}

const fBody = fData.body.reduce((acu, cur) => {
    acu += cur + ";" + "\n"
    return acu
}, '')


const testFunction = new Function(
    ...fData.params,
    fBody
)

console.log(testFunction(32, 3))