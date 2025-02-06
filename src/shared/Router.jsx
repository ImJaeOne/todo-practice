import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import Layout from '../layout/Layout';
import About from '../pages/About';
import { TodoProvider } from '../context/todoContext';

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <TodoProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mypage" element={<MyPage />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </TodoProvider>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
