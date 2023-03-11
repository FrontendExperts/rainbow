import React, { useContext } from "react";
import { CountContext } from "./contexts/";

export const Hook = () => {
  // const [count, setCount] = useState(0);
  const { count, increaseCount, decreaseCount } = useContext(CountContext);

  return (
    <>
      <section className="text-center">
        <div className="container">
          <h2>Counter by the Hook </h2>

          <div className="box11">
            <h5>Count is: {count} </h5>
            <button className="btn btn-danger" onClick={decreaseCount}>
              - Decreass
            </button>
            <button className="btn btn-primary" style={{marginLeft:20}} onClick={increaseCount}>
              + Increase
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
