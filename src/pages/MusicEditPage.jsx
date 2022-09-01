import React, {useContext, useEffect,useState} from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {UpdateMusic} from "../redux/modules/musicSlice"
import AddForm from "../components/addMusic/AddForm";
import MusicDetailpage from "./MusicDetailPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function MusicEditPage(){
    const dispatch = useDispatch();
    const location = useLocation();
    const {id} =useParams();
    const data = location.state
    const musiclist = useContext(MusicDetailpage)
    console.log(location)
    console.log(location.state)
    const [state,setState]=useState();

    const [input, setInput ] = useState({
        user:"", //작성자
        title:"", //노래제목
        artist:"", //아티스트(가수)
        body:"", 
       //추천내용
    });
       
    const navigate = useNavigate();
    const editBtn =()=>{
        dispatch(UpdateMusic(data.id),navigate(-1))
    }


   const [music,setMusic]= useState(null);

   const onSubmitHandler = (music) => {
    axios.post("http://localhost:3001/music", music);
  };

    return(
        <StForm onSubmit={(e)=>{
            e.preventDefault();
            onSubmitHandler(input)}}>
      

            <label htmlFor="user">작성자:{data.user}</label>
        
            <label htmlFor="title">제목</label>
            <input 
            name="title"
            placeholder="제목을 입력해주세요.(50자 이내)"
            max="50"
            size="wide"
            type="small"
            onChange={(ev) => {
              const { value } = ev.target;
              setInput({
                ...input,
               title: value,
              });
            }}
            value={input.title}/>
            <label htmlFor="artist">가수:{data.artist}</label>
            <label htmlFor="body">추천내용</label>
            <Textarea 
            name="body"
            placeholder="추천내용을 입력해주세요.(200자 이내)"
            max="200"
            onChange={(ev) => {
              const { value } = ev.target;
              setInput({
                ...input,
               body: value,
              });
            }}
            value={input.body}/>
            
            <button size="large"
             onClick={editBtn}
           
             >수정하기</button>
        </StForm>
       );
       }
       
       const StForm = styled.form`
       position: relative;
       min-height: 50vh;
       display: flex;
       flex-direction: column;
       label {
         font-size: 1.6rem;
         margin: 15px 0;
       }
       input {
         font-size: 1rem;
       }
       button {
         margin-top: 100px;
         margin-bottom: 50px;
       }
     `;
     
     const Textarea = styled.textarea`
       width: 100%;
       border: 1px solid rgb(238, 238, 238);
       padding: 12px;
       font-size: 14px;
     `;
     
export default  MusicEditPage