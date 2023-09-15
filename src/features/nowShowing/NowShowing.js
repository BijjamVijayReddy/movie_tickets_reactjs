import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import { Grid } from '@mui/material';
import './NowShowing.css';
import AppBanner from '../../components/appBanner/AppBanner';

const NowShowing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://innovativemultiplex.com/movies?language=&genre=')
      .then((response) => response.json())
      .then((responseData) => {
        // console.log("Data" + JSON.stringify(responseData));
        setIsLoading(true);
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const trailerHandler = (e, trailer, duration) => {
    e.stopPropagation();
  
    console.log("Button is working");
    console.log("Trailer URL: ", trailer);
    console.log("Duration: ", duration);
  
    // Open the trailer in a new tab
    window.open(trailer, "_blank");
  };
  

  return (
    <div>
      <Header />
      <AppBanner />
      <h2>Now Showing</h2>
      <div className="image-container-now">
        {data.map((nestedItem) => (
          <div key={nestedItem._id} className="movie-card">
            <div className="movie-info">
              <h3>{nestedItem.title}</h3>
              <p>Language: {nestedItem.language}</p>
            </div>
            <img
              src={nestedItem.image}
              alt={nestedItem.siteLink}
              className="image-nowShowing"
            />
            <button style={{ cursor: "pointer" }} onClick={(e) => trailerHandler(e, nestedItem.trailer, nestedItem.duration)}>
              Watch Trailer
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default NowShowing;
