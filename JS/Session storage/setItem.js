const userData = {
    user1: {
      name: "a name",
      age: 23,
    },
    user2: {
      name: "a name",
      age: 23,
    },
    user3: {
      name: "a name",
      age: 23,
    },
    user4: {
      name: "a name",
      age: 23,
    },
    user5: {
      name: "a name",
      age: 23,
    },
    user6: {
      name: "a name",
      age: 23,
    },
    user7: {
      name: "a name",
      age: 23,
    },
  };


let name = 'some name element'
let age = 324;

sessionStorage.setItem("userDatas", JSON.stringify(userData));
sessionStorage.setItem("naems", name);
sessionStorage.setItem("ages", age);