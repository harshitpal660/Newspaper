import { API } from "./APICalls";

const API_KEY = "be71e86ba2a64bc79658f9bebd1870b3"

export const topHeadlinesURL = () => {
    const url = API.TopHeadlines(API_KEY);
    return url;
};

export const SearchQueryURL = (query) => {
  console.log(query);
  const url = API.SearchQuery(API_KEY,query);
  console.log(url);
  return url;
};

export const fetchData = async (url) => {
    const response = await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response); // Log the response here
        return response;
      })
      .catch((err) => console.error(err));
  
    return response;
  };