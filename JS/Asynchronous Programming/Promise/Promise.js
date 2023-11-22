// how to create Promise
/**
 * Promise take a callback whice have to two arguments resove and reject
 * resolve mean promise is fullfil and its a function
 * reject means promise is not fulfill and its also a function
 */

const isResolve = false;

const promise = new Promise((resolve, reject) => {
    if(isResolve){
        resolve()
    }else{
        reject()
    }
})

console.log(promise)
promise.catch((err) => {
    console.log(`Rejected Error: ${err}`)
})

// when true
const isResolve1 = true;

const promise1 = new Promise((resolve, reject) => {
  if (isResolve1) {
    resolve("complete");
  } else {
    reject();
  }
});

console.log(promise1);
promise1
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(`Rejected Error: ${err}`);
  });
