import React from "react";
import styled from "styled-components";

const Text = (props) => {
  return <StContainer {...props}>{props.children}</StContainer>;
};

export default Text;

const StContainer = styled.div`

`;
