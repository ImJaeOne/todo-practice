import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { ActionBtn } from '../styled/StActionBtn';
import { useTodoContext } from '../context/todoContext';

const About = () => {
    const {todo, handleDeleteBtn} = useTodoContext();
    const [searchParam] = useSearchParams();
    const detailId = Number(searchParam.get('id'));
    const DetailTodo = todo.find((todo) => todo.id === detailId);

    const navigate = useNavigate();

    const handleUpdateBtn = (id) => {
        navigate(`/?id=${id}`);
    };

    
    return (
        <AboutWrapper>
            <TodoDetail>
                <TodoTitle>{DetailTodo?.title}</TodoTitle>
                <TodoContent>{DetailTodo?.content}</TodoContent>
                <DateInfo>
                    <Label>시작일:</Label>
                    <DateSpan>{new Date(DetailTodo?.start_date).toLocaleString('ko-KR')}</DateSpan>
                </DateInfo>
                <DateInfo>
                    <Label>종료일:</Label>
                    <DateSpan>
                        {DetailTodo?.end_date ? new Date(DetailTodo?.end_date).toLocaleString('ko-KR') : '-'}
                    </DateSpan>
                </DateInfo>
            </TodoDetail>
            <TodoBtnWrapper>
                <ActionBtn
                    $variant="update"
                    onClick={() => {
                        handleUpdateBtn(detailId);
                    }}
                >
                    Update
                </ActionBtn>
                <ActionBtn $variant="delete" onClick={() => handleDeleteBtn(detailId)}>
                    Delete
                </ActionBtn>
            </TodoBtnWrapper>
        </AboutWrapper>
    );
};

export default About;

const AboutWrapper = styled.div`
    width: 80%;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    justify-content: space-between;
`;

const TodoDetail = styled.div``;

const TodoTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
`;

const TodoContent = styled.p`
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1.5rem;
`;

const DateInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const Label = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: #555;
    margin-right: 1rem;
`;

const DateSpan = styled.span`
    font-size: 1rem;
    color: #333;
`;

const TodoBtnWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

