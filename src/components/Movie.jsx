import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { POSTER_PATH } from "../helpers";

const Movie = props => {
  const { title, poster_path, id } = props.movie;
  const moviePoster = `${POSTER_PATH}${poster_path}`;
  console.log("");
  return (
    <div>
      <Link to={`/${id}`}>
        <img srcSet={moviePoster} alt="" />
      </Link>
      <h3>{title}</h3>
    </div>
  );
};

// VALIDATORS (PROPTYPES / DEFAULT PROPS)
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string
  })
};

export default Movie;
