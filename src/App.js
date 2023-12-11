import './App.css';
import { useRef } from 'react';

function App() {
  let h1Element = useRef(null);
  return (
    <div className="App">
      <h1 ref = {h1Element} >Hello World</h1>
      <button onClick={() => {
        // alert(h1Element.current.value);
        // console.log(h1Element.current.innerHTML);


        // h1Element.current.innerHTML = '<h5>Helli World<h5/>';
        // h1Element.current.style.backgroundColor = "Yellow";
        // console.log(h1Element.current.style.backgroundColor);

        h1Element.current.style.fontSize = "5rem";

      }}> Click to Increase The size of Hello World</button>
    </div>
  );
}

export default App;
