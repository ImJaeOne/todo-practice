import React, { useEffect } from 'react';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import Layout from '../layout/Layout';
import About from '../pages/About';
import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

const routesForAuthenticatedOnly = [
    {
        path: '/',
        element: (
            <Layout>
                {/* 보호된 경로 컴포넌트 */}
                <ProtectedRoute />
            </Layout>
        ),
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: '/mypage',
                element: <MyPage />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/profile',
                element: <>Profile</>,
                // loader, // 비동기 데이터 로딩
            },
        ],
    },
];

const routesForNotAuthenticatedOnly = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: '/sign-in',
                element: <>Sign-In</>,
            },
            {
                path: '/sign-up',
                element: <>Sign-Up</>,
            },
        ],
    },
];

const router = createBrowserRouter([...routesForAuthenticatedOnly, ...routesForNotAuthenticatedOnly]);

const Routes = () => {
    const todo = useSelector((state) => state.todo);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);

    return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
