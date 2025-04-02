import React, { useState } from 'react'

const Counter = () => {

    let [count,setCount] = useState(0);

    function HandleIncrease() {
      // setCount(count + 1);
      setCount((prevCount) => prevCount + 1); 
    }

  return (
    <div>
        <h1> Counter App - {count} </h1>
        <button onClick={ HandleIncrease}>    Increase  </button>
    </div>
  )
}

export default Counter