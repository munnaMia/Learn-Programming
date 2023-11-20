console.log('Hello node js')

setTimeout(()=>console.log('first'), 3000)

console.log(__filename)
console.log(__dirname)

// Hello node js
// /home/md/Documents/test/node js/Ch 1/Global.js
// /home/md/Documents/test/node js/Ch 1
// first

let a = 10;
console.log(global.a) //undifined