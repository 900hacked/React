import { useState, useTransition } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition("");
  const [results, setResults] = useState("");

  const change = (e) => {
    setSearch(e.target.value);
    startTransition((k) => {
      setSearch(k.target.value);
    });
  };

  return (
    <>
      <input onChange={change} value={search} />
      {isPending ? <p>Loading...</p> : <p>Your search results are: {search}</p>}
    </>
  );
}
export default SearchBar;
