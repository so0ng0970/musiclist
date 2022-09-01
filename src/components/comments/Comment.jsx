import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.
import styled from "styled-components";

const Comment = ({ sendId }) => {
  const cardId = { sendId };
  const [comment, setComment] = useState({
    title: "",
    input: 0,
    cardId: 0,
  });
  const [updatedTitle, setUpdatedTitle] = useState({
    title: "",
    input: 0,
    cardId: 0,
  });

  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
    const { data } = await axios.get("http://localhost:3001/comment");
    setComments(data);
  };

  const onSubmitHandler = (comment) => {
    axios.post("http://localhost:3001/comment", comment);
    fetchComments();
  };

  const onClickDelete = (id) => {
    axios
      .delete(`http://localhost:3001/comment/${id}`)
      .then(() => fetchComments())
      .catch((error) => console.log(error));
  };

  const makeInput = async (comment, id) => {
    await axios.put(`http://localhost:3001/comment/${id}`, {
      ...comment,
      input: 1,
    });
    fetchComments();
  };

  const onClickUpdate = (id, updated) => {
    axios
      .put(`http://localhost:3001/comment/${id}`, updated)
      .then(() => fetchComments())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchComments();
    console.log("유지펙트");
  }, []);

  return (
    <>
      <Commentform
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          e.preventDefault();
          onSubmitHandler(comment);
          console.log("여기", cardId.sendId);
        }}>
        <CommentInput
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setComment({
              ...comment,
              title: value,
              cardId: cardId.sendId,
            });
          }}
        />
        <AddButton>추가하기</AddButton>
      </Commentform>
      <div>
        {comments?.map((comment) =>
          comment.cardId === sendId ? (
            <CommentList key={comment.id}>
              <CommentA>{comment.title}</CommentA>
              <button onClick={() => makeInput(comment, comment.id)}>
                수정
              </button>
              <button onClick={() => onClickDelete(comment.id)}>삭제</button>
              {comment.input === 1 ? (
                <div key={comment.id}>
                  <input
                    onChange={(e) =>
                      setUpdatedTitle({
                        ...comment,
                        title: e.target.value,
                        input: 0,
                      })
                    }></input>

                  <button
                    onClick={() => onClickUpdate(comment.id, updatedTitle)}>
                    수정완료
                  </button>
                </div>
              ) : null}
            </CommentList>
          ) : null
        )}
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