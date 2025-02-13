import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled, { useTheme } from "styled-components"; // useTheme 추가
import { ActionBtn } from "../styled/StActionBtn";
import isEqual from "lodash.isequal";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/slices/todoSlice";
import supabase from "../supabase/client";

const resetForm = {
  title: "",
  content: "",
  isDone: false,
};

export const TodoForm = () => {
  const [newTodo, setNewTodo] = useState(resetForm);
  const [searchTodo, setSearchTodo] = useState(null);

  const [searchParams] = useSearchParams();
  const searchParamsId = Number(searchParams.get("id"));

  const todo = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme(); // theme 가져오기

  useEffect(() => {
    if (searchParamsId) {
      const foundTodo = todo.find((todo) => todo.id === searchParamsId);
      setNewTodo(foundTodo);
      setSearchTodo(foundTodo);
    }
  }, []);

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setNewTodo((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmitBtn = async (e) => {
    e.preventDefault();

    if (searchParamsId) {
      // 둘 다 객체이기 때문에 JSON.stringify() 이용 하지만 순서 다를 경우 문제 생길수도..
      // lodash.isequal을 사용하자...!
      if (isEqual(newTodo, searchTodo)) {
        console.log("같음");
        navigate(-1);
        return;
      }
      dispatch(
        updateTodo({ searchParamsId: searchParamsId, newTodo: newTodo })
      );
      await supabase.from("posts").insert({
        postTitle: newTodo.title,
        postDetail: newTodo.content,
      });
      setNewTodo(resetForm);
      navigate(-1);
    } else {
      dispatch(addTodo({ newTodo: newTodo }));
      const {data, error} = await supabase.from("posts").insert({
        postTitle: newTodo.title,
        postDetail: newTodo.content,
      });
      console.log(data);
      console.log(error);
      setNewTodo(resetForm);
      navigate("/mypage");
    }
  };

  return (
    <TodoFormWrapper onSubmit={handleSubmitBtn} theme={theme}>
      <TodoLabel>
        <TodoSpan>Title</TodoSpan>
        <TodoInput
          id="title"
          value={newTodo.title}
          onChange={handleChangeInput}
          theme={theme}
        />
      </TodoLabel>
      <TodoLabel>
        <TodoSpan>Content</TodoSpan>
        <TodoInput
          id="content"
          as="textarea"
          value={newTodo.content}
          onChange={handleChangeInput}
          theme={theme}
        />
      </TodoLabel>
      <ActionBtn type="submit">{searchParamsId ? "Update" : "Add"}</ActionBtn>
    </TodoFormWrapper>
  );
};

const TodoFormWrapper = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.formBackground};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const TodoLabel = styled.label`
  width: 90%;
`;

const TodoSpan = styled.span`
  font-size: 20px;
  font-weight: bolder;
`;

const TodoInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.formBorderColor};
  border-radius: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.inputFocusBorderColor};
    box-shadow: 0 0 0 3px rgba(79, 154, 148, 0.3);
  }

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
  }

  ${({ as }) =>
    as === "textarea" &&
    `
        height: 150px; 
        resize: vertical; 
        padding: 10px;
    `}
`;

export default TodoForm;
