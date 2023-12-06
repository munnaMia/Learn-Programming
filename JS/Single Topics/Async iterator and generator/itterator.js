// Itterator is a Design pattern
// What is the task of itterator: reason we dont have a control in for loop for itteration. like we can't pause in a loop.

const array = [1, 2, 3, 4, 5, 6];
let track = 0;

function watchArr() {
  console.log(array[track++]);
}
watchArr();
watchArr();
watchArr();
watchArr();
watchArr();
watchArr();

//So how itterator work
/**
 * a real itterator has two parametter
 * {
 *      value: any
 *      next: null
 * }
 */

// so we can't go back to prev step in iterators

const userName = "Md Munna Mia";

const userName_iterator = userName[Symbol.iterator](); //it return a object.

console.log(userName_iterator.next()); //{ value: 'M', done: false }
console.log(userName_iterator.next());
console.log(userName_iterator.next());
console.log(userName_iterator.next());
console.log(userName_iterator.next());
console.log(userName_iterator.next());
// /*
// { value: 'M', done: false }
// { value: 'd', done: false }
// { value: ' ', done: false }
// { value: 'M', done: false }
// { value: 'u', done: false }
// { value: 'n', done: false } */

// for of will only work if our data structure is a itteratable object
for (let v of userName) {
  console.log(v);
}

//using while
while (true) {
  let data = userName_iterator.next();
  if (data.done) {
    break;
  }
  console.log(data.value);
}
