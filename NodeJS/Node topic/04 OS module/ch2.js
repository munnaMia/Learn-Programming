const os = require("os")

console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.cpus())
/**
 * [
  {
    model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
    speed: 1952,
    times: { user: 740620, nice: 580, sys: 139530, idle: 6708300, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
    speed: 1949,
    times: { user: 778830, nice: 620, sys: 137190, idle: 1947270, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
    speed: 1953,
    times: { user: 815830, nice: 680, sys: 140410, idle: 1941170, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
    speed: 1951,
    times: { user: 799150, nice: 1430, sys: 141590, idle: 1938660, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
    speed: 2008,
    times: { user: 767180, nice: 3820, sys: 138910, idle: 1963760, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
    speed: 2065,
    times: { user: 750170, nice: 1220, sys: 136530, idle: 1964570, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
    speed: 2017,
    times: { user: 681140, nice: 450, sys: 157620, idle: 1975380, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
    speed: 2091,
    times: { user: 756340, nice: 550, sys: 142410, idle: 1961620, irq: 0 }
  }
]
 */