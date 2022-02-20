import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const fetchURL = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API}&q=${search}&country=au,ca,ie,gb,us`;
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
  }, [search]);
  console.log(news);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearch(event.target.value)}
      />
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
