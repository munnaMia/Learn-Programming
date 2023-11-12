const array = [2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false,2, 4, 21, 34, 643, '', false];
console.time("reduce")
const result = array.reduce((acc, cur) => {
    if(cur) acc.push(cur.toString()) 
    return acc
}, []);
console.timeEnd("reduce")

console.time("map")
const result2 = array.map(ele => {
    if(ele) return ele.toString()
})
console.timeEnd("map")
