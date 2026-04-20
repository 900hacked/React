import "./Phone.css";
function Phone() {
  return (
    <>
      <h1>Phones</h1>

      <h1 className="gad">Dorians Gadgets</h1>

      <table>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Iphone 17 Pro Max</td>
          <td>2025</td>
          <td>5,000,000</td>
        </tr>
        <tr>
          <td>Samsung S25</td>
          <td>2025</td>
          <td>4,000,000</td>
        </tr>
      </table>
    </>
  );
}

export default Phone;
