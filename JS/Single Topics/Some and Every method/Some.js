// Some used to check into a array that a particular value is operation
// like :
const array = ["some", 3, 4, 3, 5, 6, "name", false, 9];

// lets check 9 is in the array or not
// using some method
array.some((ele, index, arrayOrg) => {
  if (ele === 9) {
    console.log("some", ele);
    console.log("some", index);
    console.log("some", arrayOrg);
  }
}); //true
