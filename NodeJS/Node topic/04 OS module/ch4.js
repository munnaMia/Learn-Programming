const os = require("os");

console.log(os.platform());
console.log(os.release());
/**
 linux
6.2.0-36-generic
 */


console.log(os.totalmem())
console.log(os.type())
console.log(os.tmpdir())
/**
 * 8155275264
Linux
/tmp
 */

console.log(os.userInfo())
/**
 * {
  uid: 1000,
  gid: 1000,
  username: 'md',
  homedir: '/home/md',
  shell: '/bin/bash'
}
 */


console.log(os.uptime())
console.log(os.version())
//8507.88
// #37~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Mon Oct  9 15:34:04 UTC 2
