import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List'
import axios from 'axios';

function App() {
  const [news, setNews] = useState([])
  console.log(news)
  useEffect(() => {
    const apiCall = async () => {
      try {
        const { data } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        const topTwenty = data.slice(0, 20)
        const apiCallsArray = topTwenty.map((item) => {
          return axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
        })
        const result = await axios.all(apiCallsArray)
        setNews(result)
      } catch (error) {
        console.error(error)
      }
    }
    apiCall()
  }, [])
  return (
    <List news={news}/>
  );
}

export default App;
