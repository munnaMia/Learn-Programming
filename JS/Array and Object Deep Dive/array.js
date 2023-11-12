const student = [
  {
    id: 3243452,
    name: "mr karim",
    age: 23,
  },
  {
    id: 4543452,
    name: "mr abdul",
    age: 25,
  },
  {
    id: 3246752,
    name: "mr rahim",
    age: 22,
  },
];

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// So lets create another student id

// so we can do this by using :
student.push({ id: 423, name: "mr abul", age: 21 }); // to add item last position
student.unshift({ id: 443223, name: "mr munna", age: 21 }); // to add item first position
// in this cases unshift is so risky because it have to add item first of all to the first and secound it have to move position of all the items

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// update an Element in array

// here is id to update:
const idToUpdate = 4543452;
const updateData = {
  name: "ok update the data",
  // age : 23
};

// how to find the obj to updateData
// let toUpdateData = student.find((item) => item.id === idToUpdate); // thats how to find data.

// toUpdateData = {
//     id : idToUpdate,
//     ...updateData
// }

// console.log(toUpdateData)

const udateIndex = student.findIndex((item) => item.id === idToUpdate);
student[udateIndex] = {
  // id : idToUpdate,
  ...student[udateIndex],
  ...updateData,
};

console.log(student);

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// Delete the data into the array
student.splice(udateIndex, 1); // it will delete the selected index and with a count.
console.log(student);

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// for in loop
for (i in student) {
  //i is the index
  console.log(student[i].name);
}

for (let v of student) {
  //here v is the item or in this case a pure object
  console.log(v);
}
