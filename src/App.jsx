import { css, Global } from '@emotion/react';
import 'normalize.css';
import SNSPage from './pages/SNSPage';

//나중에 globalStyle.css로 분리하기
const globalStyle = css`
  :root {
    --border-color: #d9d9d9;
    --other-bubble-color: #92A8D1;
    --my-bubble-color: #f7cac9;
    --main-text-color: #a6a6a6;
    --other-text-color: #fff;
    --my-text-color: #3a3a3a;
    --vh: 9.34px;
  }
  html, body {
    /* overflow: hidden; */
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
    scrollbar-width: none;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -.4px;
  }
  body {
    display: block;
    max-width: 500px;
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
