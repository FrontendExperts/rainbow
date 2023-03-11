import React, {useContext} from 'react';
import { CountContext } from './contexts/';



export const MyCounter = () => {
    // const [count, setCount] = useState(0);
     const {count, decreaseCount,increaseCount } = useContext(CountContext);
    


  return (
    <>
     <section className="text-center">
        <div className="container">
          <h2>Counter Page </h2>

          <div className="box">
            <button className="btn btn-primary" onClick={decreaseCount}>- Decreass</button>
                <h2>Count is: {count} </h2>
            <button className="btn btn-primary" onClick={increaseCount}>+ Increase </button>
         </div>
        </div>
     </section>
    </>
  )
}
