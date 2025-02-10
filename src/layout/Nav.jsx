import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Switch } from 'antd';
import styled from 'styled-components';
import { useTheme } from '../contexts/themeContext';

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isDarkMode, toggleTheme } = useTheme();

    const btnText = () => {
        if (location.pathname === '/') return 'MyTodo';
        if (location.pathname === '/mypage') return 'Home';
        if (location.pathname === '/about') return 'Back';
    };

    const handleNav = () => {
        if (location.pathname === '/') navigate('/mypage');
        if (location.pathname === '/mypage') navigate('/');
        if (location.pathname === '/about') navigate(-1);
    };

    return (
        <HeaderContainer>
            <Logo onClick={() => navigate('/')}>Todo</Logo>
            <HeaderRightContainer>
                <NavBtn onClick={handleNav}>{btnText()}</NavBtn>
                <Switch checked={!isDarkMode} onChange={toggleTheme} />
            </HeaderRightContainer>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.navBackground};
    color: ${({ theme }) => theme.color};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
    padding: 0 20px;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
`;

const HeaderRightContainer = styled.div`
    display: flex;
    padding: 10px;
`;

const NavBtn = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color};
    padding: 0 20px;
    margin-right: 20px;
    font-size: 16px;
    opacity: 0.8;
    transition: opacity 0.3s;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

export default Nav;
