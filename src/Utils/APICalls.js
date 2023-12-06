const apikey = 'be71e86ba2a64bc79658f9bebd1870b3'

const BASE_URL = "https://newsapi.org/v2/";

export const API = {
    TopHeadlines:()=>`${BASE_URL}top-headlines?sources=bbc-news&apiKey=${apikey}`,
    SearchQuery:(query)=>`${BASE_URL}everything?q=${query}from=2023-12-06&sortBy=popularity&apiKey=${apikey}`
    
} 