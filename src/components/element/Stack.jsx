import React from "react";
import styled from "styled-components";

const Stack = ({ children, align, jusify, direction }) => {
  return (
    <StContainer align={align} jusify={jusify} direction={direction}>
      {children}
    </StContainer>
  );
};


const StContainer = styled.div`
  width: 100%;
  ${({ align, jusify, direction }) =>
    ({
      align,
      jusify,
      direction,
    })}
`;

export default Stack;