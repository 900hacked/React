import { Suspense } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./fetch.scss";

function Fetch() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setPosts(data);
      // 👈 store data in state
    });
  }, []);
  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  }
  console.log(posts);
  return (
    <>
      <div>
        <ul>
          {posts.map((k) => (
            <li>
              {k.userId} {k.id} {k.title}
            </li>
          ))}
        </ul>
        <p>My name is Dorian</p>
      </div>
    </>
  );
}

export default Fetch;
