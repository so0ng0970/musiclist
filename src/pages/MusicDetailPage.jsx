import React, { useReducer, useState,useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import {useSelector} from "react-redux"
import {Route, Router} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getMusic}from "../redux/modules/musicSlice";
import axios from "axios";
import {useParams} from "react-router-dom"
import Comment from "../components/comments/Comment";
const MusicDetailPage= () => {
//   const history = useHistory();
const dispatch= useDispatch();
useEffect(()=>{
dispatch(getMusic());
},[dispatch])



  const {music} = useSelector((state) => state.music);
 console.log(music)
 

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
            {music.map((music) => (
              <div key={music.id}>

                <p>id:</p>
                <h2 className="card-title">{music.user}</h2>
                <p className="card-text">{music.title}</p>
                <p className="card-text">{music.artist}</p>
                <p className="card-text">{music.body}</p></div>
            ))}
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
