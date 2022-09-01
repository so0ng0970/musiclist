
//musicEditpage
import React, {useState} from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {UpdateMusic} from "../redux/modules/musicSlice"
import{ useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";


function MusicEditPage(){
    const dispatch = useDispatch();
    const location = useLocation();
    const {id} =useParams();
    const data = location.state
   
    console.log(location)
    console.log(location.state)
   

    const [input, setInput ] = useState({
        user:"", //작성자
        title:"", //노래제목
        artist:"", //아티스트(가수)
        body:"", 
       //추천내용
    });
       
    useEffect(() => {
        dispatch(UpdateMusic());
      }, [dispatch]);
    


    const [inputValue, setInputValue] = useState();
   

    const navigate = useNavigate();
    const onUpdate = (e) => {
        e.preventDefault();
        if (inputValue) {
          dispatch(UpdateMusic({ id, body: inputValue,title:data.title,user:data.user,artist:data.artist}));
          setInputValue("");
         navigate(-1);
        } else {
          console.log("다시 적으세요!");
        }
      };


    return(
       <div>
      <Dard className="card">
      <Dard className="card-body">
      <Text>{
        <div>
          <div>
            <label htmlFor>작성자:{data.user}</label>
            <label placeholder={data.user}
            onChange={(e) => (e.target.value)}/>
        </div>
        <div>
        <br/>
        <div>
            <label htmlFor="title">노래제목:{data.title}</label>
            <label  placeholder={data.title}
            onChange={(e) => (e.target.value)}/> 
            </div>
            <br/>

             </div>
             <div>
            <label htmlFor="artist">가수:{data.artist}</label>
            <label  placeholder={data.user}
            onChange={(e) => (e.target.value)}/> 
            </div>
            <br/>
              <div>
            <label htmlFor="body">추천내용</label>
            <Textarea 
            name="body"
            placeholder="추천내용을 변경해주세요.(200자 이내)"
            max="200"  
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}/>
            </div>
            <button size="large"
             onClick={ onUpdate}
           
             >수정하기</button>
          </div>
          }
      </Text>
      </Dard>
     </Dard>
     
    </div>
       );
       }
       
       const Dard = styled.div`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-45%, -50%);
          width: 600px;
          height: 500px;
        `;
        const Text = styled.div`
        text-align: center;
        padding: 100px ;
        width: 500px;
        height: 500px;
`;
     const Textarea = styled.textarea`
       width: 100%;
       border: 1px solid rgb(238, 238, 238);
       padding: 12px;
       font-size: 14px;
     `;
      
     
export default  MusicEditPage