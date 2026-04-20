import { lazy, Suspense } from "react";

//this is lazy loading it delays the loading abit intentionally
//you can use it with multiple components too
const Fetch = lazy(() => import("./fetchData"));

function Fdata() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Fetch />
      </Suspense>
    </>
  );
}

export default Fdata;
