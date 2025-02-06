import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import Layout from '../layout/Layout';
import About from '../pages/About';

const Router = () => {
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || []);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);

    

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home todo={todo} setTodo={setTodo} />} />
                    <Route path="/mypage" element={<MyPage todo={todo} setTodo={setTodo} />} />
                    <Route path="/about" element={<About todo={todo} setTodo={setTodo} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
