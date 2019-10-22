import React, { useState } from 'react';



const HooksContainer1 = () => {


  // const stateValue = useState(0)[0];
  // const setValue = useState(0)[1];
  const [stateValue, setValue] = useState(0);

  const incrementValue = () => {
    setValue(stateValue + 1)
  }

  const decrementValue = () => {
    setValue(stateValue - 1)
  }

  return(
      <div>
        React Hooks
        <br />
        <button onClick={ () => incrementValue() }>Inc Local State</button>
        <button onClick={ () => decrementValue() }>Dec Local State</button>
        <br />
        <div>
          <p>Local State: {stateValue}</p>
        </div>
      </div>
  )
}


export default HooksContainer1;
