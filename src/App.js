import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const fetchURL = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=pub_4760a40e9a54b537ffcb6b81baf64b2b7193&q=tesla`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.results);
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
            <img src={item.image_url} alt={item.title} />
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
