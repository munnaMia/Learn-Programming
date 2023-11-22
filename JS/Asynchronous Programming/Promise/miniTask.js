// function wait(ms){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("done in"+ ms)
//         },ms)
//     })
// }

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

wait(1000).then((value)=>{
    console.log(value)
})

wait(2000).then((value)=>{
    console.log(value)
})

wait(3000).then((value)=>{
    console.log(value)
})

wait(4000).then((value)=>{
    console.log(value)
})