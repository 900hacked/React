//find out which id corresponds to that title magnam facilis autem

import { useEffect, useMemo, useState } from "react";

function Practicetwo() {
  // const [posts, setPosts] = useState([]);
  const [ident, setIdent] = useState();
  const [titles, setTitle] = useState("");

  // useEffect(() => {
  //   getData().then((data) => {
  //     setPosts(data);
  //   });
  // }, []);

  // async function getData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   return response.json();
  // }
  // console.log(posts);

  //   const c = () => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const post = data.find((item) => item.title === "magnam facilis autem");
  //         if (post) {
  //           setIdent(post.id);
  //         }
  //       });
  //   };

  // useMemo(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const post = data.find((item) => item.title === "magnam facilis autem");
  //       if (post) {
  //         setIdent(post.id);
  //       }
  //     });
  // }, []);

  const up = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((ret) => ret.json())
      .then((datar) => {
        let convert = Number(ident);
        const rost = datar.find((items) => items.id === convert);
        if (rost) {
          console.log("The value of rost: " + rost);
          setTitle(rost.title);
        } else {
          setTitle("No title found");
        }
      });
  };

  // useMemo(() => {

  // }, [])

  const get = (e) => {
    setIdent(e.target.value);
  };

  console.log(ident);

  return (
    <>
      <input
        placeholder="Please enter your id"
        value={ident}
        type="number"
        onChange={get}
      />
      <button onClick={up}>submit</button> <br />
      <p>The Title is {titles} </p>
    </>
  );
}

//have an input where i put an id then hit the submit button then see the title

export default Practicetwo;
