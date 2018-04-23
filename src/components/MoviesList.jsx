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

  // METHODS
  // FOR THE SEARCH TERM
  handleChange = e => {
    // console.log("======================================");
    console.log(this.state.movies);
    // console.log("======================================");
    const searchTerm = e.target.value;
    // console.log("======================================");
    console.log(searchTerm);
    // console.log("======================================");
    const searchedMovies = this.state.movies.map(
      movie => movie.results.title === searchTerm
    );
    this.setState({ movies: searchedMovies });
  };

  // FOR THE INPUT FORM
  addMovie = e => {
    e.preventDefault();
    const newMovie = this.movieRef.current.value;
    // console.log("======================================");
    console.log(newMovie);
    // console.log("======================================");
    const newFlic = { name: newMovie };
    this.setState({ ...this.state.movies, newFlic });
  };

  // AN ASYNC LIFECYCLE METHOD THAT HITS OUT API
  async componentDidMount() {
    try {
      const res = await fetch(url);
      const movies = await res.json();
      // console.log(" ======================================");
      // console.log(movies.results.map(movie => movie.title));
      // console.log(" ======================================");
      // SETTING STATE
      this.setState({ movies: movies.results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movies } = this.state;
    console.table(movies);

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
