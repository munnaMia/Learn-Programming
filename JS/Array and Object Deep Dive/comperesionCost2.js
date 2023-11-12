// Data alway came from server as a array so we have to convert it into a object for fast operation
// Three most importent method of array :
// 1. map
// 2. fillter
// 3. reduce

const numbers = [1, 2, 3, 4];

// map function
const strs = numbers.map((item) => item.toString());
console.log(strs);

const numbers1 = [1, 2, 3, 4, false, "test", 3, 5, 2, null, undefined];

// fillter function
const strs1 = numbers1.filter((v) => v);
console.log(strs1);
// [
//   1, 2,      3,
//   4, 'test', 3,
//   5, 2
// ]

const strs2 = numbers1.filter((v) => !v);
console.log(strs2); //[ false, null, undefined ]

const strs3 = numbers1.filter((v) => !!v);
console.log(strs3);
// [
//   1, 2,      3,
//   4, 'test', 3,
//   5, 2
// ]

const newArr = [1, 2, 3, 4, 5, 6, 7];
const sum = newArr.reduce((a, b) => a + b); //reduce method take four argument prev value, curr value, index, orinal array and we can also give a intial value in reduce array
console.log(`Sum ${sum}`);

const arrayReduce = [2, 2, false, "", 4, 1, 534, 2, 456, 3, 67];

const result = arrayReduce.reduce((pre, cur, index) => {
  if (cur) {
    pre += cur.toString() + (index < arrayReduce.length - 1 ? ", " : "");
  }
  return pre; //we have to know one thing reduce always return a pre or acu
}, "");

console.log(result); //2, 2, 4, 1, 534, 2, 456, 3, 67
