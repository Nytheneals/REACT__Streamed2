import React, { Component, createRef } from "react";
import Movie from "./Movie";
import { api_Key } from "../Variables";
import styled from "styled-components";

//********************MAIN COMPONENT********************//

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

class MoviesList extends Component {
  state = {
    movies: []
  };

  // MY REFS
  movieRef = createRef();

  // FOR THE SEARCH TERM
  handleChange = e => {
    const searchTerm = e.target.value;
    const searchedMovies = this.state.movies.map(
      movie => movie.results.title === searchTerm
    );
    this.setState({ movies: searchedMovies });
  };

  // FOR THE INPUT FORM
  addMovie = e => {
    e.preventDefault();
    const newMovie = this.movieRef.current.value;
    const newFlic = { name: newMovie };
    this.setState({ ...this.state.movies, newFlic });
  };

  // AN ASYNC LIFECYCLE METHOD THAT HITS OUT API
  async componentDidMount() {
    try {
      const res = await fetch(url);
      const movies = await res.json();
      // SETTING STATE
      this.setState({ movies: movies.results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <Moviegrid>
        {movies.map(movie => <Movie movie={movie} key={movie.title} />)}
      </Moviegrid>
    );
  }
}

export default MoviesList;

const Moviegrid = styled.div`
  background: red;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
