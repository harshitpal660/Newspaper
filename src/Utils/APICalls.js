
const BASE_URL = "https://newsapi.org/v2/";
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day-1}`;
export const API = {
    TopHeadlines:(apiKey)=>`${BASE_URL}top-headlines?sources=bbc-news&apiKey=${apiKey}`,
    SearchQuery:(apiKey,query)=>`${BASE_URL}everything?q=${query}&${formattedDate}&sortBy=publishedAt&apiKey=${apiKey}`
    
} 

// https://newsapi.org/v2/everything?q=tesla&from=2023-12-06&sortBy=popularity&apiKey=be71e86ba2a64bc79658f9bebd1870b3

// https://newsapi.org/v2/everything?q=tesla&from=2023-11-06&sortBy=publishedAt&apiKey=be71e86ba2a64bc79658f9bebd1870b3