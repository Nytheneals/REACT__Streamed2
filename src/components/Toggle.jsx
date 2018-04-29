import React, { Component } from "react";
import styled from "styled-components";

class Toggle extends Component {
  render() {
    return (
      <Toggled>
        <button>Toggle</button>
      </Toggled>
    );
  }
}

export default Toggle;

const Toggled = styled.div`
  display: grid;

  width: 45px;
`;
