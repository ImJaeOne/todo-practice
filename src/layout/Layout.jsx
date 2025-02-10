import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

const Layout = () => {
    return (
        <LayoutContainer>
            <Nav />
            <MainContainer>
                <Outlet />
            </MainContainer>
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Layout;
