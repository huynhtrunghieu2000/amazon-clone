import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import "./RatingStar.css";

function RatingStar({ rating }) {
  //Handle Star Rating
  let starRating = [];
  for (let index = 0; index < 5; index++) {
    starRating.push(<StarBorderIcon />);
  }
  for (let index = 0; index < Math.ceil(rating); index++) {
    if (index + 1 <= rating) starRating[index] = <StarIcon />;
    else if (Math.ceil(rating) - rating > 0.25)
      starRating[index] = <StarHalfIcon />;
    else starRating[index] = <StarIcon />;
  }
  return <div className="ratingStar">{starRating}</div>;
}

export default RatingStar;
