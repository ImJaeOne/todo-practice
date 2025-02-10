import { Provider } from 'react-redux';
import Routes from './shared/Routes';
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
                    <Routes />
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
