

// import { useEffect, useState } from "react";
import useFetch from "./Components/useFetch/useFetch";



function App() {
  // let [data, setData] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //       if (!res.ok) {
  //         throw new Error("Network error");
  //       }
  //       let data = await res.json();
  //       console.log(data)
  //       setData(data);
  //     } catch (error) {
  //       console.warn(error.message);
  //     }
  //   }

  //   fetchData();
  // });


   let {data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

 


  if(loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }
  
  console.log(data);
  
  return (
    <div className="App">
      <div>{data.userId}</div>
      <div>{data.title}</div>
      <div>{data.id}</div>
      {/* <div>{`${data.completed}`}</div> */}
      <div>{String(data.completed)}</div>
    </div>
  );
}

export default App;
