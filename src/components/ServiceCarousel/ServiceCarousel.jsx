// import React, { useState } from 'react';
// import './ServiceCarousel.css'; // Import the CSS

// const Carousel = () => {
//   const [position, setPosition] = useState(1); // Tracks the active position
//   const [activeIndex, setActiveIndex] = useState(null); // Tracks the active image index for focus

//   // Handle image click (when an image is clicked, set that image as the active one)
//   const handleImageClick = (newPosition, index) => {
//     setPosition(newPosition);
//     setActiveIndex(index); // Set the clicked image as the active one
//   };

//   // Handle touch event (same as click but for touch devices)
//   const handleTouchStart = (newPosition, index) => {
//     setPosition(newPosition);
//     setActiveIndex(index); // Set the touched image as the active one
//   };

//   return (
//     <div className="carousel-container">
//       <main id="carousel" style={{ '--position': position }}>
//         <div
//           className="item"
//           style={{ '--position': position, '--offset': 1 }}
//           onClick={() => handleImageClick(1, 1)}
//           onTouchStart={() => handleTouchStart(1, 1)}
//         ></div>
//         <div
//           className="item"
//           style={{ '--position': position, '--offset': 2 }}
//           onClick={() => handleImageClick(2, 2)}
//           onTouchStart={() => handleTouchStart(2, 2)}
//         ></div>
//         <div
//           className="item"
//           style={{ '--position': position, '--offset': 3 }}
//           onClick={() => handleImageClick(3, 3)}
//           onTouchStart={() => handleTouchStart(3, 3)}
//         ></div>
//         <div
//           className="item"
//           style={{ '--position': position, '--offset': 4 }}
//           onClick={() => handleImageClick(4, 4)}
//           onTouchStart={() => handleTouchStart(4, 4)}
//         ></div>
//         <div
//           className="item"
//           style={{ '--position': position, '--offset': 5 }}
//           onClick={() => handleImageClick(5, 5)}
//           onTouchStart={() => handleTouchStart(5, 5)}
//         ></div>
//       </main>
//     </div>
//   );
// };

// export default Carousel;
