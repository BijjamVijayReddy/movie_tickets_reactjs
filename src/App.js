
import React from 'react';
import AppRoutes from './appRoutes/AppRoutes';

const App = () => {
  return (
    <div>
       <AppRoutes />
    </div>
  )
}

export default App

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class App extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 100,
//       autoplaySpeed: 2000,
//       cssEase: "linear"
//     };
//     return (
//       <div>
//         <h2> Multiple items </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }