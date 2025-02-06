import isEqual from 'lodash.isequal';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

const resetForm = {
    title: '',
    content: '',
    isDone: false,
};

export const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || []);

    const navigate = useNavigate();

    const handleSubmitBtn = (e, searchParamsId, searchTodo, newTodo, setNewTodo) => {
        e.preventDefault();
        // UpdateBtn
        if (searchParamsId) {
            // 둘 다 객체이기 때문에 JSON.stringify() 이용 하지만 순서 다를 경우 문제 생길수도..
            // lodash.isequal을 사용하자...!
            if (isEqual(newTodo, searchTodo)) {
                navigate(-1);
                return;
            }
            setTodo((prev) =>
                prev.map((todo) => {
                    return todo.id === searchParamsId
                        ? { ...newTodo, start_date: new Date(), end_date: '', isDone: false }
                        : todo;
                })
            );
            setNewTodo(resetForm);
            navigate(-1);
        } else { // AddBtn
            setTodo((prev) => [
                ...prev,
                {
                    ...newTodo,
                    id: new Date().getTime(),
                    start_date: new Date(),
                },
            ]);
            setNewTodo(resetForm);
            navigate('/mypage');
        }
    };

    const handleCheckBox = (id) => {
        setTodo(
            [...todo].map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone, end_date: todo.isDone ? '' : new Date() } : todo
            )
        );
    };

    const handleDeleteBtn = (id) => {
        setTodo([...todo].filter((todo) => todo.id !== id));
        navigate(-1);
    };

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);

    return <TodoContext.Provider value={{todo, setTodo, handleSubmitBtn, handleCheckBox, handleDeleteBtn}}>{children}</TodoContext.Provider>;
};
