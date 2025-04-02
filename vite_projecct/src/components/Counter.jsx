import React, { useState } from 'react'

const Counter = () => {

    let [count,setCount] = useState(0);

    function HandleIncrease() {
      // setCount(count + 1);
      setCount((prevCount) => prevCount + 1); 
    }

    let message;     // if conditions
    if(count < 10) {
        message = (
            <p> Clicked {count} times </p>
        )
    }
    else if (count < 20 ) {
        message = (
            <p> Clicked {count} times, Click more times </p>
        )
    }

  return (
    <div>
        <h1> Counter App  </h1>
        <button onClick={ HandleIncrease}>    Increase  </button>

        { message }

        {
            count >= 10 ? <p> Count is greater than 10 </p> : <p> Count is less than 10 </p> // ternary operator
        }
        {
            count >= 20 && <p> Count is greater than 20 </p> // logical operator
        }

    </div>
  )
}

export default Counter