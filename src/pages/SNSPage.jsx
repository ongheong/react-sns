import { css } from '@emotion/react';
import Header from '../components/header/Header.jsx';
import Content from '../components/content/Content.jsx';

const pageWrapper = css`
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;
  max-width: 430px;
  /*이 코드 대체 뭐길래 스크롤이 가능하게 하는거지?*/
  height: calc(var(--vh, 1vh)* 100);
`;

const otherNickName = '손오공';
const otherName = 'svt';
const currentName = 'carat';

export default function SNSPage() {
  return (
    <div css={pageWrapper}>
      <Header otherNickName={otherNickName} otherName={otherName} />
      <Content otherName={otherName} currentName={currentName}/>
      {/* <Footer /> */}
    </div>
  );
}
