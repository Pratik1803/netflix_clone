import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Header from './Header';


function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Row isLargeRow title="Netflix Originals!" fetchUrl={requests.fetchNetflixoriginals} />
      <Row title="Trending Now!" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies!" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
