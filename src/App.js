import './App.css';
import { useReducer } from 'react';

// let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// letters = letters.split('');

// let initialState = {
//   letter : letters[0],
// }

let initialState = {
  count : 0,
}

function reducer(state, action) {
  switch(action.type) {
    case "increase": 
      return {count : state.count + 1};
    case "decrease":
      return {count: state.count - 1};
    case "reset":
      return {count: 0};
    default: 
      return state;  
  }
}


function App() {
  let [state, dispatch] = useReducer(reducer, initialState);

  function increase() {
    // console.log("increase");
    dispatch({type : "increase"});
  }

  function decrease() {
    // console.log("decrease");
    dispatch({type : "decrease"});
  }
  return (
    <div className="App">
     <h1>{state.count}</h1>
     <button onClick = {increase}>Increase</button>
     <button onClick = {decrease}>Decrease</button>
     <button onClick = {() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );
}

export default App;
