import React, {useState, useEffect} from 'react';

const HooksContainer1 = () => {

  // const stateValue = useState(0)[0];
  // const setValue = useState(0)[1];
  const [stateValue, setValue] = useState(0);
  const [useEffectValue, setUseEffectValue] = useState(null);

  useEffect(() => {
    setTimeout(() => setUseEffectValue('useEffect Worked'), 3000);
  }, [stateValue]);

  const incrementValue = () => {
    setValue(stateValue + 1);
  };

  const decrementValue = () => {
    setValue(stateValue - 1);
  };

  const changeUseEffectValue = () => {
    setUseEffectValue('Some string');
  };

  return (
      <div>
        React Hooks
        <br/>
        <button onClick={() => incrementValue()}>Inc Local State</button>
        <button onClick={() => decrementValue()}>Dec Local State</button>
        <button onClick={() => changeUseEffectValue()}>Change Use Effect</button>
        <br/>
        <div>
          <p>
            {useEffectValue
                ? <p>{useEffectValue}</p>
                : <p>No Value</p>
            }
          </p>
          <p>Local State: {stateValue}</p>
        </div>
      </div>
  );
};

export default HooksContainer1;
