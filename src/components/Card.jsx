import React from "react";
import styled from "styled-components";
//import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import { Button, Stack, Text, Wrapper } from "../elem";

const Card = ({ music }) => {
//  const dispatch = useDispatch();
//  const navigate = useNavigate();

  return (
    <StCard>
      <Stack>
        <Text size="20">{music.title}</Text>
        <Button size="small" ></Button>
        <Text size="18">{music.singer}</Text>
      </Stack>
      <Wrapper>
        <Stack>작성자 : {music.nickname}</Stack>
      </Wrapper>
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  padding: 12px;
  height: 90px;
  border: 1px solid #989797;
  background-color: #f1eaea;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
`;
