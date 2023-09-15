import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import './AppBanner.css'; // Import a CSS file for your component styles

function AppBanner() {
  const [data, setData] = useState([]);
  const [isLoading ,setIsLoading] = useState(false)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  useEffect(() => {
    // Fetch data from the API
    fetch("https://innovativemultiplex.com/users/banner/ads?public=true")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData); 
        setIsLoading(true)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [isLoading]);

  return (
    <div>
  {isLoading ? (<div className="slider-container">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="slider-slide">
              {item.map((nestedItem) => (
                <div key={nestedItem._id} className="image-container">
                  <img
                    src={nestedItem.image}
                    alt={nestedItem.siteLink}
                    className="image"
                  />
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </div>):null}
    
    </div>
  );
}

export default AppBanner;
