import styled from 'styled-components';
import { ButtonStyle } from '../styled/StActionBtn';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import supabase from '../supabase/client';

const Home = () => {
    

    return (
        <HomeContainer>
            <Title>Let's TODO!</Title>
            <HomeBtn to='/post'>Start</HomeBtn>
        </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    text-align: center;
    overflow: hidden;
    transition: all 0.3s ease;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    animation: fadeIn 2s ease-in-out;
    
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const HomeBtn = styled(Link)`
    ${ButtonStyle}
    padding: 10px 20px;
    text-decoration: none;
    font-size: 1.5rem;
    border-radius: 50px;
    border: none;
    background: ${({ theme }) => theme.navBackground};
    color: ${({ theme }) => theme.color};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
        transform: scale(0.98);
    }
`;
