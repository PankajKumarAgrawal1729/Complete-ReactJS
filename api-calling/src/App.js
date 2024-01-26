import { getPosts, getRandomUser } from "./api/index";
import "./App.css";
import { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };
  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);
  return (
    <div className="App">
      {userData && <UserCard data={userData} refresh={refresh} />}
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
}

export default App;
