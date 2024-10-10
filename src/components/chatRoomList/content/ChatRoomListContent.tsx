import { css } from '@emotion/react';
import searchIcon from '../../../assets/search.svg';
import { useRef, useState } from 'react';

export default function ChatRoomListContent() {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === '') {
      alert('한 글자 이상 입력해주세요.');
      return;
    }
    setInput('');
    inputRef.current.focus();
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };
  return (
      <main css={contentWrapper}>
      <form css={footerForm} onSubmit={handleForm}>
        <span css={searchBtn}>
          <img src={searchIcon} css={btnImg} />
        </span>
        <textarea
          spellCheck="false"
          placeholder="이름검색"
          css={messageInput}
          onChange={handleInput}
          value={input}
          ref={inputRef}
        />
      </form>
      </main>
  );
}

const contentWrapper = css`
  width: 100%;
  padding: 12px 8px 32px;
`;

const footerForm = css`
  width: 100%;
  border-radius: 12px;
  padding: 2px;
  background: #e3e3e35f;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const searchBtn = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const btnImg = css`
  width: 20px;
  height: 20px;
`;

const messageInput = css`
  display: flex;
  flex: 1;
  height: 36px;
  padding: 8px 8px;
  background: none;
  resize: none;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.4px;
`;