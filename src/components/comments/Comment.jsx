import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.
import styled from "styled-components";

const Comment = () => {
  const [comment, setComment] = useState({
    title: "",
    input: 0,
  });
  const [updatedTitle, setUpdatedTitle] = useState({
    title: "",
    input: 0,
  });

  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
    const { data } = await axios.get("http://localhost:3001/comment");
    setComments(data);
  };

  const onSubmitHandler = (comment) => {
    axios.post("http://localhost:3001/comment", comment);
  };

  const onClickDelete = (id) => {
    axios
      .delete(`http://localhost:3001/comment/${id}`)
      .then(() => console.log("success"))
      .catch((error) => console.log(error));
  };

  const makeInput = (comment, id) => {
    axios.put(`http://localhost:3001/comment/${id}`, { ...comment, input: 1 });
  };

  const onClickUpdate = (id, updated) => {
    axios
      .put(`http://localhost:3001/comment/${id}`, updated)
      .then(() => console.log("success"))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <Commentform
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          e.preventDefault();
          onSubmitHandler(comment);
        }}>
        <CommentInput
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setComment({
              ...comment,
              title: value,
            });
          }}
        />
        <AddButton>추가하기</AddButton>
      </Commentform>
      <div>
        {comments?.map((comment) => (
          <CommentList key={comment.id}>
            <CommentA>{comment.title}</CommentA>
            <button onClick={() => makeInput(comment, comment.id)}>
              {" "}
              수정{" "}
            </button>
            <button onClick={() => onClickDelete(comment.id)}> 삭제 </button>
          </CommentList>
        ))}
        {comments?.map((comment) => {
          if (comment.input === 1) {
            return (
              <div key={comment.id}>
                <input
                  onChange={(e) =>
                    setUpdatedTitle({ ...comment, title: e.target.value })
                  }></input>
                <button onClick={() => onClickUpdate(comment.id, updatedTitle)}>
                  {" "}
                  수정완료
                </button>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Comment;

const Commentform = styled.form`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const CommentInput = styled.input`
  margin-left: 30%;
  margin-bottom: 50px;
  margin-right: 10px;
`;

const AddButton = styled.button`
  background-color: white;
`;

const CommentList = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const CommentA = styled.a`
  margin-right: 20px;
`;