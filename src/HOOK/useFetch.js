import  { useEffect, useState } from "react";

const useFetch = url => {
  let [state, setstate] = useState(null);
  useEffect(() => {
    window
      .fetch(url)
      .then(data =>
        data.json().then(value => {
          setstate(value);
        })
      )
      .catch(err => console.log(err));
  },[url]);
    return state;
};

export default useFetch;
