
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

