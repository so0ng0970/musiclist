import React from "react";
import styled from "styled-components";


const Button = (props) => {
  return (
    <StButton {...props} disabled={props.disabled}>
      클릭 {props.children}
    </StButton>
  );
};



const StButton = styled.button`
    border: 1px solid #eeeeee8f;
    background-color: #eee;
    height: 50 px;
    border-radius: 10 px;
`
export default Button;