import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Navbar from "../Component/Navbar";

import { useState } from "react";
import { useEffect } from "react";

import { API } from "../Utils/APICalls";
function Home() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.loginStatus);
  console.log(isLoggedin);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API.TopHeadlines); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response.json());
        // const contentType = response.headers.get('content-type');
        // if (!contentType || !contentType.includes('application/json')) {
        //   throw new Error('Response is not in JSON format');
        // }

        const data = await response.json();
        data.then((result)=>{
          console.log(result);
        })
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
        <h1>Home</h1>
      </div>
      )}
    </>
  );
}

export default Home;
