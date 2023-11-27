import { useState, Fragment, useEffect } from "react";
import NewsBanner from "./components/NewsBanner";
import { IoSearch } from "react-icons/io5";
import "../scss/components/app.scss";
import Loader from "./components/Loader";
import DisplayError from "./components/DisplayError";
import DisplayNews from "./components/DisplayNews";
import { GrSend } from "react-icons/gr";

function App() {
  const [dataFetchingProgress, setDataFetchingProgress] = useState({
    isLoading: false,
    errorMessage: ""
  });
  const [searchInput, setSearchInput] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [startSearch, setStartSearch] = useState(false);
  const [topic, setTopic] = useState("fashion")
  
  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const newsAPIUrl = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}&pageSize=10`
    const fetchNews = async () => {
      setDataFetchingProgress({...dataFetchingProgress, isLoading: true})
      try {
        const getNews = await fetch(newsAPIUrl);
        const returnData = await getNews.json();
        setNewsData(returnData?.articles);
        setDataFetchingProgress({errorMessage: "", isLoading: false})
        console.log("Main:", returnData?.articles)
      } catch (e) {
        setDataFetchingProgress({...dataFetchingProgress, errorMessage: e.message})
      }
    }

    fetchNews();
  }, [])

  useEffect(() => {
    const searchNews = async (searchInput) => {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
        const searchedData = await fetch(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apiKey}&pageSize=10`);
        const returnedData = await searchedData.json();
        setNewsData(returnedData?.articles)
        console.log("Search:", returnedData?.articles)
        setDataFetchingProgress({errorMessage: "", isLoading: false})
        setTopic(searchInput)
      } catch (e) {
        setDataFetchingProgress({...dataFetchingProgress, errorMessage: e.message})
      }
    }

    if (startSearch) {
      if (searchInput.trim().length === 0) {
        setDataFetchingProgress({...dataFetchingProgress, errorMessage: "Empty search input"})
        setStartSearch(false)
        setTopic("fashion")
      } else {
        setDataFetchingProgress({...dataFetchingProgress, isLoading: true})
        searchNews(searchInput)
        setStartSearch(false)
      }
    }
  }, [startSearch])

  return (
    <div className="app">
      <header className="appHeader">
        <div className="appHeaderTopic">
          <span className="appHeaderTopicText">{topic}</span>
        </div>
        <div className="appHeaderContent">
          <div className="appHeaderContentSearch">
            <IoSearch className="appHeaderContentSearchIcon" />
            <input 
              type="search"
              placeholder="Search for news"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="appHeaderContentSearchInput"
            />
          </div>
          <div 
            className="appHeaderContentSubmit" 
            onClick={() => setStartSearch(true)}>
            <GrSend className="appHeaderContentSubmitIcon" />
            <span className="appHeaderContentSubmitText">Search</span>
          </div>
        </div>
      </header>
      <NewsBanner topic={topic} />
      <main>
          {
            dataFetchingProgress.isLoading ?
            <Loader /> :
            
              (dataFetchingProgress.errorMessage.trim().length != 0) ?
              <DisplayError message={dataFetchingProgress.errorMessage} /> : 

              <DisplayNews newsData={newsData} />
          }
      </main>
    </div>
  );
}

export default App;
