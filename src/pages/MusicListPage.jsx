import React from "react";
import styled from "styled-components";
import MusicList from "../components/addMusic/MusicList";
import  Layout  from "../global/Layout";
import Wrapper from "../components/element/Wrapper"
import Text from "../components/element/Text"
// import { useDispatch, useSelector } from "react-redux";

const MusicListPage = () => {

  return (
    <Layout>
      <Wrapper mg="24px 0">
        <Text size="32">노래 목록</Text>
      </Wrapper>
      <StContainer>
        <MusicList />
      </StContainer>
    </Layout>
  );
};

export default MusicListPage;

const StContainer = styled.div`
  height: calc(100% - 45px - 48px);
`;
