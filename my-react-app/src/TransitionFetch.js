function Tfetch({ searchPhrase }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setPosts(data);
    });
  }, []);
  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  }
  console.log(posts);

  // let filteredPost =

  //filter posts for the search phrase and returning a list of items that pass through the filter
  return (
    <>
      <ol>
        {searchPhrase.map((k) => (
          <li>
            {" "}
            {k.userId} {k.id} {k.title}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Tfetch;
