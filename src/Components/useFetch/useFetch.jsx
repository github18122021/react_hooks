import  { useState, useEffect } from 'react';


function useFetch(url) {
  let [data, setData] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(url) {
        try {
            let res = await fetch(url);
            if(!res.ok) {
                setError("Network Error");
            }

            let data = await res.json();

            setData(data);
            setLoading(false);
        } catch (error) {
            // console.log(error.message);
            setError(error.message);
        }
    }

    fetchData(url);
  });

  return {
    data,
    error,
    loading
    
  };
}

export default useFetch;
