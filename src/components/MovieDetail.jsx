import React, {Component} from "react";
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'; import {api_Key} from
// "../Variables";
import {POSTER_PATH} from "../helpers";
import {BACKDROP_PATH} from "../helpers";
import {getMovie} from "../actions/action";
//********************MAIN COMPONENT********************//

class MovieDetail extends Component {

  componentDidMount() {
    const Id = this.props.match.params.Id;

    this
      .props
      .dispatch(getMovie(Id));
    console.log(this.props.movie);
    const movie = this.props.movie;

  }

  render() {
    const {title, release_date, overview, poster_path, backdrop_path} = this.props.movie;

    return (
      <div>
        <h1>{title}</h1>
        <h3>{release_date}</h3>
        <p>{overview}</p>
        <img src="" alt="" srcSet={`${BACKDROP_PATH}${backdrop_path}`}/>
        <img src="" alt="" srcSet={`${POSTER_PATH}${poster_path}`}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({movie: state.movies.movie, isLoaded: state.movies.movieLoaded});

// const mapDispatchToProps = (dispatch) => {   bindActionCreators({ getMovie:
// getMovie   }, dispatch) }

export default connect(mapStateToProps)(MovieDetail);
