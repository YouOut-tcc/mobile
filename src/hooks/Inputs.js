import {useReducer} from 'react';
import {deepCopyArray} from '../helpers/deepCopy';

function inputReducer(state, action) {
  switch (action.optType) {
    case 'change':
      state[action.key].value = action.value;
      break;
    case 'error':
      state[action.key].error = true;
      break;
    case 'clear':
      state.forEach(element => {
        element.error = false;
        element.errorMessage = undefined;
      });
      break;
    case 'errorMessage':
      state[action.key].error = true;
      state[action.key].errorMessage = action.message;
      break;
    case 'allError':
      state.forEach((element, index) => {
        element.error = true;
      });
      break;
  }
  return JSON.parse(JSON.stringify(state));
  // return deepCopyArray(state);
}

function useReducerInputs(initialState) {
  const [inputState, setInputState] = useReducer(inputReducer, initialState);

  const onChange = (value, key) => {
    setInputState({key, value, optType: 'change'});
  };

  const setError = (key, message = undefined) => {
    if (message) {
      setInputState({key, message, optType: 'errorMessage'});
      return;
    }
    setInputState({key, optType: 'error'});
  };

  const setAllErrors = () => {
    setInputState({optType: 'allError'});
  };

  const clearErrors = () => {
    setInputState({optType: 'clear'});
  };

  return [inputState, onChange, setError, clearErrors, setAllErrors];
}

export {useReducerInputs};
