
function mapUsers(users) {
  return {data: users, count: users.length}; 
}

function mapArticles(articles) {
  return {data: articles, count: articles.length}; 
}

const users = [
  {
    id: 1,
    username: "isrotrip",
    password: "PhT1Oky01",
    gender: "male",
  },
  {
    id: 2,
    username: "dmtrxw",
    password: "oYt2Thj9w",
    gender: "male",
  },
];

console.log(mapUsers(users))

export default mapUsers
export {mapArticles}

