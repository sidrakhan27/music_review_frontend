import './App.css';
import api from './Api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import MusicHero from './components/hero/MusicHero';
import MusicReviews from './components/reviews/MusicReviews';
import NotFound from './components/notFound/NotFound';

function App() {
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState();
  const [reviews, setReviews] = useState([]);

  const getMusicData = async (musicId) => {
    try {
      const response = await api.get(`/api/v1/music/${musicId}`);
      const singleSong = response.data;
      setSong(singleSong);
      setReviews(singleSong.reviews);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/v1/music");
        setSongs(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MusicHero songs={songs} />} />
          <Route path="/Play/:songId" element={<MusicReviews getMusicData={getMusicData} song={song} reviews={reviews} setReviews={setReviews} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

