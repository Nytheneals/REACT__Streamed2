import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Overdrive from 'react-overdrive';
import { POSTER_PATH } from '../helpers';
import { BACKDROP_PATH } from '../helpers';
import { getMovie } from '../actions/action';
import { Poster } from './Movie';
//* *******************MAIN COMPONENT********************//

class MovieDetail extends Component {
  componentDidMount() {
    const { getMovie, match, movie } = this.props;
    const Id = match.params.Id;
    getMovie(Id);
  }

  render() {
    const { title, release_date, overview, poster_path, backdrop_path } = this.props.movie;
    const { movie } = this.props;
    return (
      <MovieBurrito backdrop={`${BACKDROP_PATH}${backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${movie.id}`}>
            <Poster srcSet={`${POSTER_PATH}${poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{title}</h1>
            <h3>{release_date}</h3>
            <p>{overview}</p>
          </div>
        </MovieInfo>
      </MovieBurrito>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie,
  isLoaded: state.movies.movieLoaded,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovie,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

const MovieBurrito = styled.div`
  position: relative;
  padding-top: 60vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  // background: linear-gradient(110deg, #f93d6615, #6e47d954);
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }

  h1 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
  }
  img {
    position: relative;
    top: -4rem;
  }
`;
