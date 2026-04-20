import Compo from "./Compo";
import Sum from "./comp";

function Condition(props) {
  const con = props.con;

  //   if (con) {
  //     return <Sum />;
  //   } else {
  //     return <Compo />;
  //   }

  return <>{con ? <Sum /> : <Compo />}</>;
}

export default Condition;
