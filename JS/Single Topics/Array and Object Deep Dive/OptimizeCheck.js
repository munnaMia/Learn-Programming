const arr = []

for(let i =0; i<=5000000; i++){
    arr.push(i)
}

console.time('not-optimeize')
arr.filter(ele => ele % 2 === 0).map(item => item*2)
console.timeEnd('not-optimeize')


console.time('optimeize')
arr.reduce((acu, cur)=>{
    if(cur%2===0){
        acu.push(cur * 2)
    }
    return acu
}, [])
console.timeEnd('optimeize')


// not-optimeize: 173.384ms
// optimeize: 124.072ms