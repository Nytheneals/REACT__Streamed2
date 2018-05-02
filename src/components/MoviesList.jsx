import React, { Component } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import { connect } from "react-redux";

//********************MAIN COMPONENT********************//
class MoviesList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <Moviegrid>
        {movies.map(movie => <Movie movie={movie} key={movie.title} />)}
      </Moviegrid>
    );
  }
}

// STATE // ============================================================
const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesList);

// STYLES // ============================================================
const Moviegrid = styled.div`
  background: red;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
