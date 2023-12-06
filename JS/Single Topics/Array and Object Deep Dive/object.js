const student = {
  user1: {
    id: 3243452,
    name: "mr karim",
    age: 23,
  },
  user2: {
    id: 4543452,
    name: "mr abdul",
    age: 25,
  },
  user3: {
    id: 3246752,
    name: "mr rahim",
    age: 22,
  },
};

// so how to delete an from an object 
delete student.user1
// console.log(student[3246752])



// Travarse in object 
for (key in student){
  console.log(student[key].id)
}



//another way to itterate
Object.keys(student).forEach(key => { //it will take the key or an id
  console.log(key)
})

Object.values(student).forEach(studentP => { //it will take the value of each object
  console.log(studentP)
})