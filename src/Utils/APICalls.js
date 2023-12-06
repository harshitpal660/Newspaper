
const BASE_URL = "https://newsapi.org/v2/";

export const API = {
    TopHeadlines:(apiKey)=>`${BASE_URL}top-headlines?sources=bbc-news&apiKey=${apiKey}`,
    SearchQuery:(apiKey,query)=>`${BASE_URL}everything?q=${query}&from=2023-11-06&sortBy=publishedAt&apiKey=${apiKey}`
    
} 

// https://newsapi.org/v2/everything?q=tesla&from=2023-12-06&sortBy=popularity&apiKey=be71e86ba2a64bc79658f9bebd1870b3

// https://newsapi.org/v2/everything?q=tesla&from=2023-11-06&sortBy=publishedAt&apiKey=be71e86ba2a64bc79658f9bebd1870b3