import { useState } from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa"; // Corrected import

export default function StarRating({ noOfStar = 5 }) {
  const [star, setStar] = useState(0); // Tracks the clicked rating
  const [mouseHover, setMouseHover] = useState(0); // Tracks the hover index

  const handleClick = (index) => {
    setStar(index); // Set the star rating when clicked
  };

  const handleMouseMove = (index) => {
    setMouseHover(index); // Set hover state on mouse move
  };

  const handleMouseLeave = () => {
    setMouseHover(0); // Reset hover state when mouse leaves
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((_, index) => (
        <FaStar
          key={index + 1} // Ensure unique key
          size={50} // Star size
          className={
            index + 1 <= (mouseHover || star) ? "star-highlighted" : "star"
          } // Highlight stars on hover or based on rating
          onClick={() => handleClick(index + 1)}
          onMouseMove={() => handleMouseMove(index + 1)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}