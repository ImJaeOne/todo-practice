import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router />
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
