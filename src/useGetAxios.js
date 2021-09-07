import axios from "axios";
import { useState, useEffect } from "react";

export const useGetAxios = (url) => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);

  // getting a new list of cities depending on the url change
  useEffect(() => {
    (async () => {
      await axios
        .get(url)
        .then((response) => {
          setCities(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, [url]);

  return { loading, cities };
};
