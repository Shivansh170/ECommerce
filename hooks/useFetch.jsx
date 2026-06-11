import { useEffect, useState } from "react";
export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(url);
        const dataTemp = await res.json();
        setData(dataTemp);
      } catch (error) {
        setError(true);
        console.log("Error in fetching data", url);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [url]);
  return { data, loading, error };
}
