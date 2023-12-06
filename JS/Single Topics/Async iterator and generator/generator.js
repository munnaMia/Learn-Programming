// to create a generator function by given * sign you can create a generator

// a generator return a iterator
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = myGenerator();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
/**
 * { value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
 */

function* range(start, end, step) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

const rangeIt = range(1, 30, 3);
// console.log(rangeIt.next())
// console.log(rangeIt.next())
// console.log(rangeIt.next())
// console.log(rangeIt.next())
// console.log(rangeIt.next())
// console.log(rangeIt.next())
// console.log(rangeIt.next())
// console.log(rangeIt.next())
// console.log(rangeIt.next())
// console.log(rangeIt.next())
// console.log(rangeIt.next())

/**
 * { value: 1, done: false }
{ value: 4, done: false }
{ value: 7, done: false }
{ value: 10, done: false }
{ value: 13, done: false }
{ value: 16, done: false }
{ value: 19, done: false }
{ value: 22, done: false }
{ value: 25, done: false }
{ value: 28, done: false }
{ value: undefined, done: true }
 */

for (let v of range(1, 30, 2)) {
  console.log(v);
}
/**
 * 1
3
5
7
9
11
13
15
17
19
21
23
25
27
29
 */
