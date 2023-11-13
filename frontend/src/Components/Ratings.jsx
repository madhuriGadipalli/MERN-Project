import React from "react";

export const Ratings = ({ ratings, totalReviews, color = "burlywood" }) => {
  return (
    <div className={`Ratings`} style={{ color: color }}>
      <i
        className={
          ratings >= 1
            ? "fas fa-star"
            : ratings == 0.5
            ? "far fa-star-half-alt"
            : "far fa-star"
        }
      />
      <i
        className={
          ratings >= 2
            ? "fas fa-star"
            : ratings == 1.5
            ? "far fa-star-half-alt"
            : "far fa-star"
        }
      />
      <i
        className={
          ratings >= 3
            ? "fas fa-star"
            : ratings == 2.5
            ? "far fa-star-half-alt"
            : "far fa-star"
        }
      />
      <i
        className={
          ratings >= 4
            ? "fas fa-star"
            : ratings == 3.5
            ? "far fa-star-half-alt"
            : "far fa-star"
        }
      />
      <i
        className={
          ratings >= 5
            ? "fas fa-star"
            : ratings == 4.5
            ? "far fa-star-half-alt"
            : "far fa-star"
        }
      />
      <span>
        {totalReviews} {"reviews"}
      </span>
    </div>
  );
};
