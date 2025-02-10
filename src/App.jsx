import { Provider } from 'react-redux';
import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import store from './redux/config/configStore';
import ThemeContextProvider from './contexts/themeContext';

const App = () => {
    return (
        <>
            <ThemeContextProvider>
                <GlobalStyle />
                <Provider store={store}>
                    <Router />
                </Provider>
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
