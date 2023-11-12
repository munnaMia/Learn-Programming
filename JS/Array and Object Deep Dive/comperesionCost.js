const arr = [];
const arrToObje = {};
for (let i = 0; i <= 5000000; i++) {
  let track = {
    id: i,
    value: i,
  };

  arr.push(track);

  arrToObje[i] = track;
}

console.time("find");
const id = 4999999;
const obj = arr.find((item) => item.id === id);
obj.value = 3434;
console.timeEnd("find");

console.time("obj");
arrToObje[id].value = 234;
console.timeEnd("obj");
