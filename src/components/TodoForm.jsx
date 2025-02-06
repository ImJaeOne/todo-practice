import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { ActionBtn } from '../styled/StActionBtn';
import isEqual from 'lodash.isequal';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../redux/slices/todoSlice';

const resetForm = {
    title: '',
    content: '',
    isDone: false,
};

export const TodoForm = () => {
    const [newTodo, setNewTodo] = useState(resetForm);
    const [searchTodo, setSearchTodo] = useState(null);

    const [searchParams] = useSearchParams();
    const searchParamsId = Number(searchParams.get('id'));

    const todo = useSelector((state) => state.todo);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleSubmitBtn = (e) => {
        e.preventDefault();

        if (searchParamsId) {
            // 둘 다 객체이기 때문에 JSON.stringify() 이용 하지만 순서 다를 경우 문제 생길수도..
            // lodash.isequal을 사용하자...!
            if (isEqual(newTodo, searchTodo)) {
                console.log('같음');
                navigate(-1);
                return;
            }
            dispatch(updateTodo({ searchParamsId: searchParamsId, newTodo: newTodo }));
            setNewTodo(resetForm);
            navigate(-1);
        } else {
            dispatch(addTodo({ newTodo: newTodo }));
            setNewTodo(resetForm);
            navigate('/mypage');
        }
    };

    return (
        <TodoFormWrapper onSubmit={handleSubmitBtn}>
            <TodoLabel>
                <TodoSpan>Title</TodoSpan>
                <TodoInput id="title" value={newTodo.title} onChange={handleChangeInput} />
            </TodoLabel>
            <TodoLabel>
                <TodoSpan>Content</TodoSpan>
                <TodoInput id="content" as="textarea" value={newTodo.content} onChange={handleChangeInput} />
            </TodoLabel>
            <ActionBtn type="submit">{searchParamsId ? 'Update' : 'Add'}</ActionBtn>
        </TodoFormWrapper>
    );
};

const TodoFormWrapper = styled.form`
    width: 100%;
    max-width: 400px;
    margin: 2rem auto;
    padding: 1.5rem;
    background-color: #f9f9f9;
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
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    color: #333;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #4f9a94;
        box-shadow: 0 0 0 3px rgba(79, 154, 148, 0.3);
    }

    &::placeholder {
        color: #bbb;
    }

    ${({ as }) =>
        as === 'textarea' &&
        `
        height: 150px; 
        resize: vertical; 
        padding: 10px;
    `}
`;

export default TodoForm;
