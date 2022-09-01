
import React, { useEffect } from "react";
import Stack from "../element/Stack";
import Card from "../element/Card"; 
import {useSelector} from "react-redux"
import { getMusic } from "../../redux/modules/musicSlice";
import { useDispatch } from "react-redux";

const MusicList = () => {
  const dispatch = useDispatch();
  const {music} = useSelector((state) => state.music);

  useEffect(() => {
    dispatch(getMusic());
  }, [dispatch]);

    return (
     
      <Stack>
      {music.map((music) => (
                <Card
                music={music}
                key={music.id}
                />  ))}
      </Stack>
    );
};

export default MusicList;