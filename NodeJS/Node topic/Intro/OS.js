 const os = require("os")

 console.log(os.arch()) //x64
 /**
  * Returns the operating system CPU architecture for 
  * which the Node.js binary was compiled. Possible values 
  * are 'arm', 'arm64', 'ia32', 'mips','mipsel', 'ppc', 
  * 'ppc64', 's390', 's390x', and 'x64'.
  */

 console.log(os.cpus())
//  [
//     {
//       model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
//       speed: 2126,
//       times: { user: 3102950, nice: 2160, sys: 573530, idle: 24087830, irq: 0 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
//       speed: 1948,
//       times: { user: 3138420, nice: 3200, sys: 553560, idle: 4022030, irq: 0 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
//       speed: 2294,
//       times: { user: 3294080, nice: 3570, sys: 537610, idle: 3985560, irq: 0 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
//       speed: 2264,
//       times: { user: 3172540, nice: 2240, sys: 550740, idle: 4008570, irq: 0 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
//       speed: 2271,
//       times: { user: 3100680, nice: 3740, sys: 548060, idle: 4060360, irq: 0 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
//       speed: 2019,
//       times: { user: 3102100, nice: 2010, sys: 534620, idle: 4046640, irq: 0 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
//       speed: 2227,
//       times: { user: 2791220, nice: 2400, sys: 627200, idle: 4080530, irq: 0 }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-8350U CPU @ 1.70GHz',
//       speed: 2178,
//       times: { user: 3174660, nice: 2620, sys: 558560, idle: 4035570, irq: 0 }
//     }
//   ]

console.log(os.freemem())


console.log(os.getPriority())



console.log(os.networkInterfaces())

// {
//     lo: [
//       {
//         address: '127.0.0.1',
//         netmask: '255.0.0.0',
//         family: 'IPv4',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '127.0.0.1/8'
//       },
//       {
//         address: '::1',
//         netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//         family: 'IPv6',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '::1/128',
//         scopeid: 0
//       }
//     ],
//     wlp1s0: [
//       {
//         address: '192.168.1.9',
//         netmask: '255.255.255.0',
//         family: 'IPv4',
//         mac: '98:2c:bc:00:2d:19',
//         internal: false,
//         cidr: '192.168.1.9/24'
//       },
//       {
//         address: 'fe80::4d96:282e:8d05:9687',
//         netmask: 'ffff:ffff:ffff:ffff::',
//         family: 'IPv6',
//         mac: '98:2c:bc:00:2d:19',
//         internal: false,
//         cidr: 'fe80::4d96:282e:8d05:9687/64',
//         scopeid: 3
//       }
//     ]
//   }

console.log(os.hostname())
console.log(os.homedir())
console.log(os.type())
console.log(os.platform())
console.log(os.userInfo())
