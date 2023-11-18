const path = require("path")

const currentFileLocation = __filename

console.log(path.basename(currentFileLocation)) //Path.js > last file name part is the output

console.log(path.extname(currentFileLocation)) //.js > output the extension name only



// create own file location 
const fileLocation = {
    dir: 'userDir',
    name: 'file',
    ext: '.js'
}
console.log(path.format(fileLocation))//userDir/file.js


console.log(path.isAbsolute(currentFileLocation)) //true
console.log(path.isAbsolute(path.format(fileLocation))) //false


console.log(path.join("user", "undifine", "hello.js")) // user/undifine/hello.js 
console.log(path.resolve(__dirname, "script", "hello.js")) ///home/md/Documents/test/node js/Ch 1/script/hello.js




console.log(path.parse(currentFileLocation))
// {
//     root: '/',
//     dir: '/home/md/Documents/test/node js/Ch 1',
//     base: 'Path.js',
//     ext: '.js',
//     name: 'Path'
//   }