import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles";

interface ThumbProps {
  image: string;
  movieId?: number;
  clickable: boolean;
}

const Thumb = ({ image, movieId, clickable }: ThumbProps) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
