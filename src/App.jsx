import { css, Global} from '@emotion/react';
import 'normalize.css';
import SNSPage from './pages/SNSPage';

//나중에 globalStyle.css로 분리하기
const globalStyle = css`
  html, body {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
    scrollbar-width: none;
    font-family: 'Roboto', sans-serif;
  }
  body {
    display: block;
  }
`;

const GlobalStyle = () => <Global styles={globalStyle} />;

function App() {
  return (
    <>
      <GlobalStyle />
      <SNSPage />
    </>
  );
}

export default App;
