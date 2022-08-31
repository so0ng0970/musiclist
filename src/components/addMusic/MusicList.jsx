import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import Stack from "../element/Stack";
import Text from "../element/Text";
import Button from "../element/Button";


const MusicList = () => {
 
  const navigate = useNavigate();

    return (
   
      <Stack>
        <Text size="18">목록이 비었습니다.</Text> <Button  
         onClick={() => {
          navigate("/detail/");} }/>
        </Stack>
    );
};

export default MusicList;