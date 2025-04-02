import React, { useState } from 'react'

const Counter = () => {

    let [count,setCount] = useState(0);

    function HandleIncrease() {
      // setCount(count + 1);
      setCount((prevCount) => prevCount + 1); // Functional update
      setCount((prevCount) => { return prevCount + 1 } );
      setCount((prevCount) => prevCount + 1);
    }

    function returnSample () {
        console.log("returnSample called")
        return 100;
    }
    let [sample, setSample] = useState( () => { return returnSample() } );  // pass function in useState

  return (
    <div>
        <h1> Counter App - {count} - {sample} </h1>
        <button onClick={ HandleIncrease}>    Increase  </button>
    </div>
  )
}

export default Counter