import './App.css';
import { useReducer } from 'react';


let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let letter = letters[0];

let initialState = {
  letter: letters[0],
  index: 0,
}

function reducer(state, action) {
  switch(action.type) {
    case "next": {
      if(state.index === letters.length - 1) {
        state.index = 0;
        letter = letters[state.index];
        return {letter: letter, index: state.index};
      } else {
        state.index += 1;
        letter = letters[state.index];
        return {letter: letter, index: state.index};
      }
    }
    case "previous": {
      if (state.index === 0) {
        state.index = letters.length - 1;
        letter = letters[state.index];
        return {letter: letter, index: state.index};
      } else {
        state.index -= 1;
        letter = letters[state.index];
        console.log(letter);
        return {letter: letter, index: state.index};
      }
    }
    case "reset": {
      return  {letter: 'A', index: 0};
    }
    default: {
      return state;
    }
  }
}
function App() {
  let [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <h1>{state.letter}</h1>
      <button onClick={() => dispatch({type: "next"})}>Next Letter</button>
      <button onClick={() => dispatch({type: "previous"})}>Previous Letter</button>
      <button onClick={() => dispatch({type: "reset"})}>reset</button>
    </div>
  );
}

export default App;
