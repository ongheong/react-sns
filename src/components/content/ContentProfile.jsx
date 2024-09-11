import { css } from '@emotion/react';

const profileImg = css`
    width: 36px; 
    height: 36px; 
    border-radius: 50%;
    border: 1px solid var(--border-color);
`;

export default function ContentProfile({ src }) {
    return (
        <img src={src} alt="profile" css={profileImg}/>
    );
}