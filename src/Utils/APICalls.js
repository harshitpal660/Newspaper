
const BASE_URL = "https://newsapi.org/v2/";

export const API = {
    TopHeadlines:(apiKey)=>`${BASE_URL}top-headlines?sources=bbc-news&apiKey=${apiKey}`,
    SearchQuery:(apiKey,query)=>`${BASE_URL}everything?q=${query}from=2023-12-06&sortBy=popularity&apiKey=${apiKey}`
    
} 

