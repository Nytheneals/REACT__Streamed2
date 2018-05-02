import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ACTION IMPORT // ============================================================
import { toggleMessage, getMovies } from "../actions/action";

class Toggle extends Component {
  render() {
    return (
      <div>
        {this.props.messageVisibility && <h1>This has been toggled</h1>}
        <button onClick={() => this.props.toggleMessage()}>TOGGLE</button>
        <button onClick={() => this.props.getMovies()}>MOVIES</button>
        {console.log(this.props.messageVisibility)}
        {console.log(this.props.movies)}
      </div>
    );
  }
}

// STATE
const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
  movies: state.movies.movies
});

// ACTIONS
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { toggleMessage: toggleMessage, getMovies: getMovies },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
