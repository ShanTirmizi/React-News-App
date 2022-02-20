import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const fetchURL = async () => {
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-01-19&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchURL();
  }, []);
  console.log(news);
  return (
    <div className="App">
      {news.map((item, index) => {
        return (
          <div key={index}>
            <a href={item.url}>
              <h1>{item.title}</h1>
            </a>
            <img src={item.urlToImage} alt={item.title} />
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
