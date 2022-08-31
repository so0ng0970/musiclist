import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <Wrap>
            <button onClick={()=> navigate("/")}>🏠</button>
            <p>Music is my Life</p>
        </Wrap>
    )
}

export default Header;

const Wrap = styled.div`
    display: flex;
    width:100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: row;
    height: 45px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(221, 221, 221);
    padding: 0px 12px;

`