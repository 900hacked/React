import { useEffect, useState } from "react";

function Example() {
  const [post, setPosts] = useState([]);
  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  }

  useEffect(() => {
    getData().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      <table>
        {post.map((k) => {
          <tr>
            <td>{k.userId}</td>
            <td>{k.id}</td>
            <td>{k.title}</td>

            <td>{k.body}</td>
          </tr>;
        })}
      </table>
    </>
  );
}
export default Example;
