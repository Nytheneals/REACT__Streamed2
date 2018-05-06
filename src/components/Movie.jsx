import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Overdrive from "react-overdrive";
import {POSTER_PATH} from "../helpers";

const Movie = props => {
  const {title, poster_path, id} = props.movie;
  const moviePoster = `${POSTER_PATH}${poster_path}`;
  return (
    <div className="album">
      <Overdrive id={`${props.movie.id}`}>
        <Link to={`/${props.movie.id}`}>
          <Poster className="album__artwork" srcSet={moviePoster} alt=""/>{" "}
        </Link>
      </Overdrive>
      <div className="album__details">
        <h2>{title}</h2>
        <p className="album__artist">Artist Name</p>
        <p className="album__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint
          doloremque repellat, iste debitis.
        </p>
      </div>
    </div>
  );
};

// VALIDATORS (PROPTYPES / DEFAULT PROPS)
Movie.propTypes = {
  movie: PropTypes.shape({title: PropTypes.string.isRequired, desc: PropTypes.string})
};

export default Movie;

export const Poster = styled.img `
box-shadow: 0 0 35px black;
`
