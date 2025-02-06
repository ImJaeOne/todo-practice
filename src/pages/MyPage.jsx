import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MyPage = ({ todo, setTodo }) => {
    const navigate = useNavigate();

    const doneTodo = todo.filter((todo) => todo.isDone === true);
    const notDoneTodo = todo.filter((todo) => todo.isDone === false);

    const handleDetail = (e, id) => {
        if (e.target.tagName === 'INPUT') {
            return;
        }
        navigate(`/about?id=${id}`);
    };

    const handleCheckBox = (id) => {
        setTodo(
            [...todo].map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone, end_date: todo.isDone ? '' : new Date() } : todo
            )
        );
    };

    return (
        <MyTodoWrapper>
            <Title>MyTodo</Title>
            <TodoContainer>
                <TodoColumn>
                    <ColumnTitle>Working🔥</ColumnTitle>
                    {notDoneTodo.map((todo) => (
                        <TodoItem key={todo.id} onClick={(e) => handleDetail(e, todo.id)}>
                            <span>{todo.title}</span>
                            <Checkbox
                                type="checkbox"
                                checked={todo.isDone === true}
                                onChange={() => handleCheckBox(todo.id)}
                            />
                        </TodoItem>
                    ))}
                </TodoColumn>
                <TodoColumn>
                    <ColumnTitle>Done🎉</ColumnTitle>
                    {doneTodo.map((todo) => (
                        <TodoItem key={todo.id} onClick={(e) => handleDetail(e, todo.id)}>
                            <span>{todo.title}</span>
                            <Checkbox
                                type="checkbox"
                                checked={todo.isDone === true}
                                onChange={() => handleCheckBox(todo.id)}
                            />
                        </TodoItem>
                    ))}
                </TodoColumn>
            </TodoContainer>
        </MyTodoWrapper>
    );
};

export default MyPage;

const MyTodoWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #333;
`;

const TodoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

const TodoColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const ColumnTitle = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    color: #555;
`;

const TodoItem = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    background-color: #ddd;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);
    }
`;

const Checkbox = styled.input`
    width: 18px;
    height: 18px;
    cursor: pointer;
`;
