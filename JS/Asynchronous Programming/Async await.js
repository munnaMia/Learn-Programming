// this async will return a Promise
async function get(){
    try{
        const data = await getData('get some data')
    }catch(err){
        console.log(err)
    }
}

function getData(){}

console.log(get().then(da => console.log(da)).catch()) //Promise { undefined }