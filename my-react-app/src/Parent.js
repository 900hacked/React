import Students from "./Children";
import Teachers from "./Teachers";

function Parent() {
  return (
    <>
      <div>
        <h1>The School</h1>
        <Students>
          <p>The School has approximately 2000 students</p>
        </Students>
        <Teachers>
          <p>The school has approximately 100 teachers</p>
        </Teachers>
      </div>
    </>
  );
}

export default Parent;
