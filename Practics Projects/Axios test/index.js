const axios = require("axios");
const post_URL = "https://jsonplaceholder.typicode.com/posts";
const comment_URL = "https://jsonplaceholder.typicode.com/comments";
const user_URL = "https://jsonplaceholder.typicode.com/users";

// axios return data into a data property
async function getComment(userName) {
  try {
    const { data: user } = await axios.get(`${user_URL}?username=${userName}`);
    const { data: posts } = await axios.get(`${post_URL}?userId=${user[0].id}`);
    const { data: comment } = await axios.get(
      `${comment_URL}?postId=${posts[0].id}`
    );
    const { data: findUserWithComment } = await axios.get(
      `${user_URL}?email=${comment[0].email}`
    );
    console.log(findUserWithComment);
  } catch (err) {
    console.log(err.toJSON());
  }
}

getComment("Bret");
