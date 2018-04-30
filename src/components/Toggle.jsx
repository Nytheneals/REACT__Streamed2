import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ACTION IMPORT
import { toggleMessage, getMovies } from "../actions/action";

// MAIN TOGGLE COMPONENT
class Toggle extends Component {
  handleSubmit = () => {
    return this.props.toggleMessage();
  };
  handleGet = () => {
    return this.props.getMovies();
  };

  render() {
    return (
      <Toggled>
        {this.props.messageVisibilty && <p>This has been toggled</p>}
        <button onClick={this.handleSubmit}>TOGGLE</button>
        <button onClick={this.handleGet}>MOVIES</button>
      </Toggled>
    );
  }
}

// STATE
const mapStateToProps = state => ({
  messageVisibilty: state.message.messageVisibilty
});

// ACTIONS
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { toggleMessage: toggleMessage, getMovies: getMovies },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);

const Toggled = styled.div`
  display: grid;
  width: 45px;
`;
