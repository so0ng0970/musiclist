import React from "react";
import styled from "styled-components";
import {useEffect ,useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import musicSlice from "../../redux/modules/musicSlice"
import axios from "axios";

let nextId =0;
function AddForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput ] = useState({
        user:"", //작성자
        title:"", //노래제목
        artist:"", //아티스트(가수)
        body:"", 
       //추천내용
    });
 
   const [music,setMusic]= useState(null);

    const FetchMusic = async () => {
      const { data } = await axios.get("http://localhost:3001/music",music);
      setMusic(data);}

    
    // const onChange = (e) => {
    //     const {name, value} = e.target;
    //     setInput({...input, [name]: value});
    // };

    const onSubmitHandler = (music) => {
      axios.post("http://localhost:3001/music", music);
    };
   
  useEffect(() => {FetchMusic();}, []);

    return (
        <StForm
        onSubmit={(e)=>{
            e.preventDefault();
            onSubmitHandler(input)}}>
      

            <label htmlFor="user">작성자</label>
            <input 
            name="user"
             placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
             max="5"
             size="wide"
             type="small"
             onChange={(ev) => {
              const { value } = ev.target;
              setInput({
                ...input,
                user: value,
              });
            }}
             value={input.user}/>


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


            <label htmlFor="artist">아티스트</label>
            <input 
            name="artist"
            placeholder="아티스트를 입력해주세요.(50자 이내)"
            max="50"
            size="wide"
            type="small"
            onChange={(ev) => {
              const { value } = ev.target;
              setInput({
                ...input,
               artist: value,
              });
            }}
            value={input.artist}/>


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
            
            <button size="large">추가하기</button>
        </StForm>
    )
          };


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

export default AddForm;