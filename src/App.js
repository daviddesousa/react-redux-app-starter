import React, {useState, useReducer} from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as UserReducer from './store/hooks_state/user_input_hooks_reducer';
import * as ACTIONS from './store/actions/actions';

const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0);

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(
      Reducer.HooksReducer, Reducer.initialState);

  const [stateUser, dispatchUser] = useReducer(
      UserReducer.UserReducer, UserReducer.initialState);

  const incrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1);
  };
  const decrementGlobalState = () => {
    setStateGlobal(stateGlobal - 1);
  };

  const handleContextDispatchTrue = () => {
    dispatchContextGlobal(ACTIONS.success());
  };

  const handleContextDispatchFalse = () => {
    dispatchContextGlobal(ACTIONS.failure());
  };

  const handleUseContextChange = (e) => {
    dispatchUser(ACTIONS.user_input_change(e.target.value));
  };

  const handleUseContextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    dispatchUser(ACTIONS.user_input_submit(e.target.useContext.value));
  };

  return (
      <div>
        React
        <Context.Provider
            value={{
              valueGlobalState: stateGlobal,
              addGlobalValue: () => incrementGlobalState(),
              decGlobalValue: () => decrementGlobalState(),

              reducerGlobalState: stateContextGlobal.stateprop2,
              dispatchContextTrue: () => handleContextDispatchTrue(),
              dispatchContextFalse: () => handleContextDispatchFalse(),

              useContextChange: stateUser.user_text_change,
              useContextSubmit: stateUser.user_text_submit,
              useContextHandleChange: (e) => handleUseContextChange(e),
              useContextHandleSubmit: (e) => handleUseContextSubmit(e),
            }}
        >
          <Routes/>
        </Context.Provider>
      </div>
  );
};

export default App;
