import React, {useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import {useSelector} from "react-redux"


import { useDispatch } from "react-redux";
import {getMusic}from "../redux/modules/musicSlice";

import {useParams} from "react-router-dom"
import Comment from "../components/comments/Comment";
const MusicDetailPage= () => {
//   const history = useHistory();
const dispatch= useDispatch();
useEffect(()=>{
dispatch(getMusic());
},[dispatch])

const Params= useParams();

  const {music} = useSelector((state) => state.music);
 
 const music_index = Params.id-1;
 console.log(music[ music_index])


// const onDelete = (e,id) => {
//   e.preventDefault();
//   dispatch(deleteList(id));
// };  


  // const {music}= useSelector((state) => state.musics);

//   const { isLoading, error, music} = useSelector((state) => state.music);
//   console.log(music)
 
//  const Params= useParams();
//  console.log(Params)
//  const todo_list = useSelector((state) => state)
//  console.log(todo_list)
    return(
     <>
     <Card className="card">
        <Card className="card-body">
          <button type="button" className="btn btn-light"
          >ᴇᴅɪᴛ</button>
          <button type="button" className="btn btn-light"
          >X</button>
          <Text>
            {
              <div >

                <p>id:{music[ music_index].id}</p>
                <h2 className="card-title">{music[ music_index].user}</h2>
                <p className="card-text">{music[ music_index].title}</p>
                <p className="cagird-text">{music[ music_index].artist}</p>
                <p className="card-text">{music[ music_index].body}</p>
                </div>
            }
          </Text>
        </Card>
      </Card> 
      <Comment></Comment></>

    );
    }
    const Card = styled.div`
    position:absolute;
    top:50%; left:50%;
    transform: translate(-50%, -50%);
    width:500px;
    height:500px;
    
    `;
    
    const Text = styled.div`
    text-align : center;
    padding:100px 0;
    
    `;

export default MusicDetailPage;