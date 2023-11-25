function* genarateID(){
    let id = 1
    while(true){
        yield id++
    }
}


const userID = genarateID()
const productID = genarateID()

console.log(`userID : ${userID.next().value}`)
console.log(`userID : ${userID.next().value}`)
console.log(`userID : ${userID.next().value}`)
console.log(`userID : ${userID.next().value}`)
console.log(`userID : ${userID.next().value}`)


console.log(`Product id: ${productID.next().value}`)
console.log(`Product id: ${productID.next().value}`)
console.log(`Product id: ${productID.next().value}`)
console.log(`Product id: ${productID.next().value}`)
console.log(`Product id: ${productID.next().value}`)
console.log(`Product id: ${productID.next().value}`)

/*
userID : 1
userID : 2
userID : 3
userID : 4
userID : 5
Product id: 1
Product id: 2
Product id: 3
Product id: 4
Product id: 5
Product id: 6 */
