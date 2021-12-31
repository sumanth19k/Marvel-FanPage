import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text, url } = reviews[index];

  // const checkNumber = (ind) => {
  //   if (ind > reviews.length - 1) {
  //     return 0;
  //   }
  //   if (ind < 0) {
  //     return reviews.length - 1;
  //   }
  //   return ind;
  // };

  const changeLeft = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex > reviews.length - 1) {
        return 0;
      }
      if (newIndex < 0) {
        return reviews.length - 1;
      }
      return newIndex;
    });
  };

  const changeRight = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > reviews.length - 1) {
        return 0;
      }
      if (newIndex < 0) {
        return reviews.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <a href={url}>
          <img src={image} alt={text} className="person-img" />
        </a>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h2 className="author">{name}</h2>
      <h3 className="job">{job}</h3>
      <p className="info">{text}</p>
      <div className="button-container">
        <FaChevronLeft className="prev-btn" onClick={() => changeLeft()} />
        <FaChevronRight className="next-btn" onClick={() => changeRight()} />
      </div>
    </article>
  );
};

export default Review;
