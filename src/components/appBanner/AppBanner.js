import React, { useEffect, useState } from 'react';

function AppBanner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://innovativemultiplex.com/users/banner/ads?public=true")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData); // Update the state with the response data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {data.map((nestedArray, index) => (
        <div key={index}>
          {nestedArray.map((item) => (
            <img key={item._id} src={item.image} alt={item.siteLink} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AppBanner;