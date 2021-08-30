import axios from 'axios';
import { useState, useEffect } from 'react';

export const useGetAxios = (url) => {
 const [loading, setLoading] = useState(true);
 const [cities, setCities] = useState([]);

 const getCities = async () => {
   await axios
   .get(url)
   .then((response) => {
       setCities(response.data);
       setLoading (false);
   })
   .catch(err => {
       console.log(err);
   }); 
 };

 // getting a new list of cities depending on the url change
 useEffect(() => {
    getCities();
 }, [url]);

 return {loading, cities}
};