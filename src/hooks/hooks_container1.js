import React, {useState, useEffect, useReducer, useContext} from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/context';

const HooksContainer1 = () => {
  const context = useContext(Context);

  // const stateValue = useState(0)[0];
  // const setValue = useState(0)[1];
  const [stateValue, setValue] = useState(0);
  const [useEffectValue, setUseEffectValue] = useState(null);

  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);

  useEffect(() => {
    setTimeout(() =>
        setUseEffectValue('useEffect Worked'),
        3000);
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

  const handleDispatch = () => {
    // dispatch(ACTIONS.SUCCESS);
    // dispatch(type: 'SUCCESS');
    dispatch(ACTIONS.success());
  };

  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure());
  };

  return (
      <div>
        React Hooks
        <br/>
        <button onClick={() => incrementValue()}>Inc Local State</button>
        <button onClick={() => decrementValue()}>Dec Local State</button>
        <button onClick={() => changeUseEffectValue()}>Change Use Effect</button>
        <button onClick={() => handleDispatch()}>Dispatch True</button>
        <button onClick={() => handleDispatchFalse()}>Dispatch False</button>
        <button onClick={() => context.addGlobalValue()}>Add Global Value</button>
        <button onClick={() => context.decGlobalValue()}>Dec Global Value</button>
        <button onClick={() => context.dispatchContextTrue()}>Dispatch Context True</button>
        <button onClick={() => context.dispatchContextFalse()}>Dispatch Context False</button>
        <br/>
        <div>
          <p>
            {useEffectValue
                ? <p>{useEffectValue}</p>
                : <p>No Value</p>
            }
          </p>
          <p>
            {context.useContextSubmit
                ? <p>{context.useContextSubmit}</p>
                : <p>No User Text</p>
            }
          </p>
          {state.stateprop1
            ? <p>state prop1 is true</p>
            : <p>state prop1 is false</p>
          }
          {context.reducerGlobalState
              ? <p>state prop2 is true</p>
              : <p>state prop2 is false</p>
          }
          <p>Local State: {stateValue}</p>
          <p>Global State: {context.valueGlobalState}</p>
        </div>
      </div>
  );
};

export default HooksContainer1;
