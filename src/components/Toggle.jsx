import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// MAIN TOGGLE COMPONENT
class Toggle extends Component {
  handleSubmit = () => {
    return this.props.toggleMessage();
  };

  render() {
    return (
      <Toggled>
        {this.props.messageVisibilty && <p>This has been toggled</p>}
        <button onClick={this.handleSubmit}>Toggle</button>
      </Toggled>
    );
  }
}

// ACTIONS
import { toggleMessage } from "../actions/action";

// STATE
const mapStateToProps = state => ({
  messageVisibilty: state.message.messageVisibilty
});

// ACTIONS
const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMessage: toggleMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);

const Toggled = styled.div`
  display: grid;
  width: 45px;
`;
