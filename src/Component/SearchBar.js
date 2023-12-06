// SearchBar.js
import React, { useState } from 'react';
import styles from "../Styles/Home.module.css"; // Import your CSS file for styling
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setQuery,setData } from '../Reducer/UserActivityReducer';
import { SearchQueryURL,fetchData } from '../Utils';
import { useEffect } from 'react';
const SearchBar = () => {
  const query = useSelector((state)=>state.query);

  const handleChange = (event) => {
    dispatch(setQuery(event.target.value));

  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const queryData = SearchQueryURL(query); // Replace with your API endpoint

        const queryDataResponse = await Promise.resolve(fetchData(queryData));
       
        // console.log(topHeadlinesResponse.articles);
        // const contentType = response.headers.get('content-type');
        // if (!contentType || !contentType.includes('application/json')) {
        //   throw new Error('Response is not in JSON format');
        // }
        if(query !==""){
            console.log(queryDataResponse.articles);
            dispatch(setData(queryDataResponse.articles));
        }
        
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchDataAsync();
  }, [query]); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount
  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
