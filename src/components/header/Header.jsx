import { css } from '@emotion/react';
import { useState } from 'react';

const header = css`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #fff;
`;

const leftWrapper = css`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const profileWrapper = css`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const profileImage = css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const profileContent = css`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const profileName = css`
    font-weight: bold;
    font-size: 16px;
`;

const profileDesc = css`
    font-size: 12px;
    color: var(--main-text-color);
`;

const rightWrapper = css`
    display: flex;
    align-items: flex-start;
    gap: 16px;
`;

const headerBtn = css`
  width: 24px;
  height: 24px;
`;

export default function Header({ otherNickName, otherName }) {
  const [isMuted, setIsMuted] = useState(false);

    function handleMute() {
        setIsMuted(!isMuted);
        //추가 함수 구현하기
    }

  return (
    <header css={header}>
      <div css={leftWrapper}>
        <img src="/assets/back.svg" css={headerBtn} />
        <div css={profileWrapper}>
          <img src="/assets/seventeen.jpg" alt="profile" css={profileImage} />
            <div css={profileContent}>
          <span css={profileName}>{otherNickName}</span>
          <span css={profileDesc}>{otherName}</span>
          </div>
        </div>
      </div>
      <div css={rightWrapper}>
        <span onClick={handleMute}>
        {isMuted ? (
          <img src="/assets/bell-slash.svg" css={headerBtn} />
        ) : (
          <img src="/assets/bell.svg" css={headerBtn} />
        )}
        </span>
        <img src="/assets/video.svg" css={headerBtn} />
      </div>
    </header>
  );
}
