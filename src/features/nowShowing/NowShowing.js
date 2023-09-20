import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import { Grid } from '@mui/material';
// import './NowShowing.css';
import AppBanner from '../../components/appBanner/AppBanner';
import CurrentShow from '../../components/currentShows/CurrentShow';

const NowShowing = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://innovativemultiplex.com/movies?language=&genre=')
      .then((response) => response.json())
      .then((responseData) => {
        // setIsLoading(true);
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const trailerHandler = (e, trailer, duration) => {
    window.open(trailer, "_blank");
  };

  return (
    <div>
      <Header />
      <AppBanner />
      <h2>Now Showing</h2>
      
        {data.map((nestedItem) => {
          return (
            <CurrentShow
            key={nestedItem.id}
             title = {nestedItem.title}
             language = {nestedItem.language}
             movie_img = {nestedItem.image}
             click={(e) => trailerHandler(e, nestedItem.trailer, nestedItem.duration)}
            />
          )
        })}
    </div>
  );
};

export default NowShowing;
