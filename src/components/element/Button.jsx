import React from "react";
import styled from "styled-components";


const Button = (props) => {
  return (
    <StButton {...props} disabled={props.disabled}>
       {props.children}
    </StButton>
  );
};



const StButton = styled.button`
  
    height: 1 px;

`
export default Button;