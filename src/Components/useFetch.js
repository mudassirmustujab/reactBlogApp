import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blog, setblog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    console.log("useEffect ran");

    const abrt = new AbortController();
    fetch(url, { signal: abrt.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error(`Could not get data ${res.status}`);
        } else {
          setError(false);
          return res.json();
        }
      })
      .then((data) => {
        setblog(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(true);
          setLoading(false);
          setErrMsg(err.message);
        }
      });
    return () => abrt.abort();
  }, [url]);
  return { blog, loading, error, errMsg };
};

export default useFetch;
