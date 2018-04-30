import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
class Toggle extends Component {
  handleSubmit = () => {
    return this.props.dispatch({
      type: "SALUTIONS"
    });
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

const mapStateToProps = state => ({
  messageVisibilty: state.message.messageVisibilty
});

export default connect(mapStateToProps)(Toggle);
const Toggled = styled.div`
  display: grid;
  width: 45px;
`;
