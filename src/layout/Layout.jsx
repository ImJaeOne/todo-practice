import Nav from './Nav';
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <Nav />
            <MainContainer>{children}</MainContainer>
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const MainContainer = styled.main`
    margin-top: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Layout;
