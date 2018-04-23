import React, { Component } from "react";
import { api_Key } from "../Variables";
import { POSTER_PATH } from "../helpers";
import { BACKDROP_PATH } from "../helpers";
//********************MAIN COMPONENT********************//

class MovieDetail extends Component {
  state = {
    movie: {}
  };

  // AN ASYNC LIFECYCLE METHOD THAT HITS OUR API
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.Id
        }?api_key=${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );

      const movie = await res.json();

      this.setState({ movie: movie });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      title,
      release_date,
      overview,
      poster_path,
      backdrop_path
    } = this.state.movie;

    return (
      <div>
        <h1>{title}</h1>
        <h3>{release_date}</h3>
        <p>{overview}</p>
        <img src="" alt="" srcSet={`${BACKDROP_PATH}${backdrop_path}`} />
        <img src="" alt="" srcSet={`${POSTER_PATH}${poster_path}`} />
      </div>
    );
  }
}

export default MovieDetail;
