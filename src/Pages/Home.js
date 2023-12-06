import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Navbar from "../Component/Navbar";

import { useState } from "react";
import { useEffect } from "react";

import { Card } from "../Component/Card";
// import { fetchData } from "../Utils/APICalls";
import { topHeadlinesURL,fetchData } from "../Utils";
function Home() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.loginStatus);
  console.log(isLoggedin);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const topHeadlines = topHeadlinesURL(); // Replace with your API endpoint

        const topHeadlinesResponse = await Promise.resolve(fetchData(topHeadlines));
       
        console.log(topHeadlinesResponse.articles);
        // const contentType = response.headers.get('content-type');
        // if (!contentType || !contentType.includes('application/json')) {
        //   throw new Error('Response is not in JSON format');
        // }
        setData(topHeadlinesResponse.articles);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Navbar/>
      {isLoggedin?(
      <div className="dashboard">
        <h1>dashboard</h1>
      </div>
      ):(
      <div className="Home">
        {data.map((item)=>{
          return (<Card
          item={item}
          />)
        })}
      </div>
      )}
    </>
  );
}

export default Home;
