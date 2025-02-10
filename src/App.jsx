import { Provider } from 'react-redux';
import Routes from './shared/Routes';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import store from './redux/config/configStore';
import ThemeContextProvider from './contexts/themeContext';
import AuthProvider from './contexts/AuthContext';

const App = () => {
    return (
        <>
            <ThemeContextProvider>
                <AuthProvider>
                    <GlobalStyle />
                    <Provider store={store}>
                        <Routes />
                    </Provider>
                </AuthProvider>
            </ThemeContextProvider>
        </>
    );
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  body{
    margin: 0;
    background-color: ${({ theme }) => theme.background};
  }
`;

export default App;
