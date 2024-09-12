import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import Header from '../components/header/Header.jsx';
import Content from '../components/content/Content.jsx';
import Footer from '../components/footer/Footer.jsx';
import mockData from '../mock/mockData.json';

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

const otherNickName = '손오공';
const otherName = 'svt';
const currentName = 'carat';

export default function SNSPage() {
  const [messages, setMessages] = useState(() => {
    const mockDataList = mockData;
    return mockDataList? mockDataList : [];
  });

  useEffect(() => {
    
  }, [messages]);
  
  function handleAddMessage(input) {
    const nowTime = new Intl.DateTimeFormat("ko", { timeStyle: "short"}).format(new Date());

    const newMessage = {
      id: messages.length + 1,
      status: 1,
      content: input,
      time: nowTime,
    }
    setMessages((prev) => [...prev, newMessage]);
  }

  return (
    <div css={pageWrapper}>
      <Header otherNickName={otherNickName} otherName={otherName} />
      <Content otherName={otherName} currentName={currentName} messages={messages}/>
      <Footer handleAddMessage={handleAddMessage}/>
    </div>
  );
}
