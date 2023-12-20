const { pseudoRandomBytes } = require("crypto")
const path = require("path")

console.log(path.basename(__dirname)) //Path Module
console.log(path.basename(__filename)) //Path.js
console.log(path.extname(__filename)) //.js


const pathFile = {
    root: '/Propertise',
    dir: '/Home/files',
    base: 'file.txt',
    name: 'file',
    ext: 'txt'
}

console.log(path.format(pathFile))


console.log(path.isAbsolute(__filename))
console.log(path.isAbsolute('home/file'))

console.log(path.join('/home', 'file', 'dis'))

console.log(path.normalize('/home/js/..')) //home

console.log(path.parse(__dirname))
/**
 * {
  root: '/',
  dir: '/home/md/Documents/test/node js',
  base: 'Path module',
  ext: '',
  name: 'Path module'
}

┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
(All spaces in the "" line should be ignored. They are purely for formatting.)
 */

console.log(path.posix.win32.format(pathFile) + "\n")

console.log(path.resolve('/data/orandea/test/aaa', './impl/bbb'))

console.log(path.split(path.sep))
