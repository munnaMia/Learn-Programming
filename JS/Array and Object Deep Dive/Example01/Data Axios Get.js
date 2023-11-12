const axios = require("axios").default; // importing axios for node style
const url = "https://jsonplaceholder.typicode.com/posts"; //Data collect

async function getData() {
  const { data } = await axios.get(url);

  // getting the data from the hole object its called distructuring Using map
  //   const result = data.map(item => {
  //     return {
  //         userID : item.userId,
  //         id: item.id,
  //         title: item.title
  //     }
  //   })

  const result = data.slice(0, 10).reduce((acu, cur) => {
    acu[cur.id] = {...cur};
    delete acu[cur.id].body;
    return acu;
  }, {});

  return result;
}

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
