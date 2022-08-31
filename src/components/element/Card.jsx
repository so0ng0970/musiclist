import React from "react";
import styled from "styled-components";
//import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import {useNavigate} from "react-router-dom";



const Card = ({music}) => {

  
const {user,title,artist,body,id} = music
const navigate = useNavigate();


  return (
    <StCard>
       <button type="button" class="btn btn-light"
                 onClick={() => {
          navigate("/detail/"+id);} }
              >ᴅᴇᴛᴀɪʟ</button>
              <div key={music.id}>
           
                <p>id:{music.id}</p>
                <h2 className="card-title">작성자:{user}</h2>
                <p className="card-text">제목:{title}</p>
                <p className="cagird-text">{artist}</p>
                <p className="card-text">{body}</p>
                </div>
        
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  padding: 50px;
  height: px;
  border: 1px solid #989797;
  background-color: #f1eaea;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
`;