import React, {useState, useReducer, useContext} from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_input_hooks_reducer';

const HooksForm = () => {
  const [valueChange, setValueChange] = useState('');
  const [valueSubmit, setValueSubmit] = useState('');

  const [userState, userDispatch] = useReducer(UserReducer.UserReducer,
      UserReducer.initialState);

  const handleUseStateChange = (e) => {
    setValueChange(e.target.value);
  };

  const handleUseStateSubmit = (e) => {
    e.preventDefault();
    setValueSubmit(e.target.useState.value);
  };

  const handleUseReducerChange = (e) => {
    userDispatch(ACTIONS.user_input_change(e.target.value));
  };

  const handleUseReducerSubmit = (e) => {
    e.preventDefault();
    userDispatch(ACTIONS.user_input_submit(e.target.useReducer.value));
  };

  return (
      <div>
        <form onSubmit={handleUseStateSubmit}>
          <label>React useState: </label>
          <input id="useState" type="text" onChange={handleUseStateChange}/>
          <button type="submit">Submit</button>
        </form>
        <form onSubmit={handleUseReducerSubmit}>
          <label>React useReducer: </label>
          <input id="useReducer" type="text" onChange={handleUseReducerChange}/>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>React useState: </h2>
          <p>Change: {valueChange}</p>
          <p>Submit: {valueSubmit}</p>
          <h2>React useReducer: </h2>
          <p>Change: {userState.user_text_change}</p>
          <p>Submit: {userState.user_text_submit}</p>
        </div>
      </div>
  );
};

export default HooksForm;
