import React, {useState, useReducer, useContext} from 'react';

const HooksForm = () => {
  const [valueChange, setValueChange] = useState('');
  const [valueSubmit, setValueSubmit] = useState('');

  const handleUseStateChange = (e) => {
    setValueChange(e.target.value);
  };
  const handleUseStateSubmit = (e) => {
    e.preventDefault();
    setValueChange(e.target.useState.value);
  };

  return (
      <div>
        <form onSubmit={handleUseStateSubmit}>
          <label>React useState: </label>
          <input id="useState" type="text" onChange={handleUseStateChange}/>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>React useState: </h2>
          <p>Change: {valueChange}</p>
          <p>Submit: {valueSubmit}</p>
        </div>
      </div>
  );
};

export default HooksForm;
