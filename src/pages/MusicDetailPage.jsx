import React , { useEffect }from "react";
import styled from "styled-components";
import Comment from "../components/comments/Comment";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteMusic } from "../redux/modules/musicSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UpdateMusic } from "../redux/modules/musicSlice";
function MusicDetailpage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const data = location.state;
  console.log(location);
  console.log(location.state);

  const navigate = useNavigate();
  const deleteBtn = () => {
    dispatch(DeleteMusic(data.id));return navigate(-1);
  };
  useEffect(() => {
   UpdateMusic();
  }, []);
  return (
    <>
      <Card className="card">
        <Card className="card-body">
          <Link to={`/edit/${data.id}`} state={data}>
            <button type="button" className="btn btn-light">
              ᴇᴅɪᴛ
            </button>
          </Link>
          <button type="button" className="btn btn-light" onClick={deleteBtn}>
            X
          </button>
          <Text>
            {
              <div>
                <p>id:{data.id}</p>
                <h2 className="card-title">{data.user}</h2>
                <p className="card-text">{data.title}</p>
                <p className="cagird-text">{data.artist}</p>
                <p className="card-text">{data.body}</p>
              </div>
            }
          </Text>
        </Card>
      </Card>
      <div>
        <Com>
          <Comment sendId={data.id} />
        </Com>
      </div>
    </>
  );
}
const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
`;
const Com = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  top: 100%;
  transform: translate(-50%);
  width: 500px;
`;
const Text = styled.div`
  text-align: center;
  padding: 100px 0;
  width: 500px;
  height: 500px;
`;

export default MusicDetailpage;