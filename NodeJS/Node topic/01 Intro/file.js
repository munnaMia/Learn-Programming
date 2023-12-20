const fs = require('fs')

let test={
    name : 'munna',
    age: 23,
    address : {
        city: 'cumilla',
        country: 'bangladesh'
    }
}

test = JSON.stringify(test)

fs.writeFile("data.json", test, (err)=>{
    console.log(err)
})


// now read a file 

fs.readFile("./data.json", (err,data) => {
    console.log(err)
    let data1 = JSON.parse(data)
    console.log(data1)
})
// {
//     name: 'munna',
//     age: 23,
//     address: { city: 'cumilla', country: 'bangladesh' }
//   }