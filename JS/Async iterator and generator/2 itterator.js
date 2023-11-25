// So as we know Object isnt iterable by for of loop

// exm:
let range = {
  start: 0,
  end: 100,
  step: 10,
};

// so lets make it iterable
range[Symbol.iterator] = function () {
  let cur = this.start;
  const step = this.step;
  const end = this.end;
  return {
    next() {
      const obj = {
        value: cur,
        done: cur > end,
      };
      cur += step;
      return obj;
    },
  };
};

for (let v of range) {
  console.log(v);
}
