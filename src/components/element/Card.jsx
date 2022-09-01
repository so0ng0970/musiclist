

import React from "react";
import styled from "styled-components";

//import { useDispatch } from "react-redux";
import MusicDetailpage from "../../pages/MusicDetailPage"
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";


const Card = ({music}) => {

    
  const {user,title,artist,body,id} = music

  const data = {
    'id':id,
    'user': user,
    'title': title,
    'artist': artist,
    'body': body
  }

  return (
    
    <StCard>
      <Link 
        to={`/detail/${music.id}`}
                state={data}
      >
       <button type="button" className="btn btn-light"
        >ᴅᴇᴛᴀɪʟ</button>
        </Link>
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