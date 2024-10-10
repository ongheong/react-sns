import { css } from '@emotion/react';

import LeftBubble from './LeftBubble';
import RightBubble from './RightBubble';

interface ContentProps {
  isMuted: boolean;
  otherName: string;
  currentName: string;
  messages: Message[];
};

export default function Content({
  isMuted,
  otherName,
  currentName,
  messages,
}: ContentProps) {
  let isLeftBubble: boolean = false;

  return (
    <div css={contentWrapper}>
      {messages.map((item, index) => {
        isLeftBubble = item.userId === 0 ? true : false;
        return isLeftBubble ? (
          <LeftBubble
            key={index}
            content={item.content}
            name={otherName}
            time={item.time}
          />
        ) : (
          <RightBubble
            key={index}
            content={item.content}
            name={currentName}
            time={item.time}
          />
        );
      })}
      {isMuted ? (
        <div css={mutedMessage}>
          <hr css={mutedLine} />
          {otherName.toUpperCase()} 님이 방해 금지 모드를 설정하여 메시지를
          전송할 수 없습니다.{' '}
        </div>
      ) : null}
    </div>
  );
}

const contentWrapper = css`
  width: 100%;
  padding: 100px 16px 100px;
  gap: 16px;
  overflow: scroll;
  flex: 1;
`;

const mutedMessage = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  font-size: 18px;
  font-weight: 400;
  color: var(--main-text-color);
  padding: 32px 64px;
  white-space: pre-wrap;
`;

const mutedLine = css`
  border: 0.3px solid #d9d9d9;
  width: 100%;
  margin: 0;
  margin-top: 16px;
  margin-bottom: 32px;
`;
