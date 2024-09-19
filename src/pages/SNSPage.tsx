import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import Header from '../components/header/Header';
import Content from '../components/content/Content';
import InputField from '../components/footer/InputField';
import mockData from '../mock/mockData.json';
import { Message } from '../sns';

const OTHER_NICKNAME = '손오공';
const OTHER_NAME = 'svt';
const CURRENT_NAME = 'carat';

export default function SNSPage() {
  const [messages, setMessages] = useState<Message[]>(mockData);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  return (
    <div css={pageWrapper}>
      <Header isMuted={isMuted} setIsMuted={setIsMuted} otherNickName={OTHER_NICKNAME} otherName={OTHER_NAME} />
      <Content isMuted={isMuted} otherName={OTHER_NAME} currentName={CURRENT_NAME} messages={messages}/>
      <InputField isMuted={isMuted} messages={messages} setMessages={setMessages}/>
    </div>
  );
}

const pageWrapper = css`
  position: relative;
  margin: 0 auto;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 430px;
  border: 1px solid var(--border-color);
`;

