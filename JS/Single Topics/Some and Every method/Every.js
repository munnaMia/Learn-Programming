const array = [1, 3, 324, 23, 53, 21, 3];

//Now let's say we want to test if every number in the array is less than 100. Using every we can easily test it like below:

array.every((ele, i, orArr) => {
    console.log(`Element : ${ele} and index : ${i} and orignal array ${orArr}`)
})