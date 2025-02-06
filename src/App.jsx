import { Provider } from 'react-redux';
import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import store from './redux/config/configStore';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <Router />
            </Provider>
        </>
    );
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  body{
    margin: 0;
  }
`;

export default App;
