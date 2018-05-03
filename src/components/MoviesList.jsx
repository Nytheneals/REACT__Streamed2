import React, { Component } from "react";
import Movie from "./Movie";
// import styled from "styled-components";
import { connect } from "react-redux";
import { getMovies } from "../actions/action";

//********************MAIN COMPONENT********************//
class MoviesList extends Component {
  componentDidMount() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      this.props.dispatch(getMovies());
    }
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="albums">
        {movies.map(movie => <Movie movie={movie} key={movie.title} />)}
      </div>
    );
  }
}

// STATE // ============================================================
const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded
});

export default connect(mapStateToProps)(MoviesList);

// STYLES // ============================================================
// const Moviegrid = styled.div`
//   background: red;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
// `;
