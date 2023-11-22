const os = require("os")

console.log(os.loadavg())
console.log(os.machine())
console.log(os.endianness())
console.log(os.networkInterfaces())

// all output 
/*
[ 0.76, 1.34, 1.81 ]

x86_64

LE


{
  lo: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    }
  ],
  wlp1s0: [
    {
      address: '192.168.1.9',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '98:2c:bc:00:2d:19',
      internal: false,
      cidr: '192.168.1.9/24'
    },
    {
      address: 'fe80::4d96:282e:8d05:9687',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '98:2c:bc:00:2d:19',
      internal: false,
      cidr: 'fe80::4d96:282e:8d05:9687/64',
      scopeid: 3
    }
  ]
}
 */