const axios = require("axios").default;



async function getData() {
  const { data: users } = await axios.get("https://dummyjson.com/users");
  return users;
}
getData()
  .then(async (user) => {
    const userIterator = await getPostbyID(user.users)
    console.log((await userIterator.next()).value)
    console.log((await userIterator.next()).value)
    console.log((await userIterator.next()).value)
    console.log((await userIterator.next()).value)
  })
  .catch((e) => console.log(e));



async function* getPostbyID(users) {
  const URL = "https://dummyjson.com/users";

  for (let i = 0; i < users.length; i++) {
    const {data: posts} = await axios.get(`${URL}?userId=${users[i].id}`);
    yield posts;
  }
}
