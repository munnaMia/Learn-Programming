// adding items to the local Storage

localStorage.setItem("names1", "md munna mia1");
localStorage.setItem("names2", "md munna mia2");
localStorage.setItem("names3", "md munna mia3");
localStorage.setItem("names4", "md munna mia4");

const users = {
  id1: {
    id: 1,
    name: "md munna mia",
  },
  id2: {
    id: 12,
    name: "md rony",
  },
  id3: {
    id: 123,
    name: "md tarif",
  },
  id4: {
    id: 1234,
    name: "md anas",
  },
  id5: {
    id: 12345,
    name: "md asif",
  },
  id6: {
    id: 123456,
    name: "md kawser",
  },
};

// getting data from localStorage

localStorage.setItem("userData", JSON.stringify(users)); //local storage only can store string data.

console.log(localStorage.getItem("names1"));
console.log(localStorage.getItem("names2"));
console.log(localStorage.getItem("names3"));
console.log(localStorage.getItem("names4"));

console.log(JSON.parse(localStorage.getItem("userData")));

// removing data from local Storage

localStorage.removeItem("names1");
localStorage.removeItem("names2");
localStorage.removeItem("names4");

// clear form local Storage
localStorage.clear();
