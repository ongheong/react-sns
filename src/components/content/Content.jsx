import { css } from '@emotion/react';

import LeftBubble from './LeftBubble.jsx';
import RightBubble from './RightBubble.jsx';
import mockData from '../../mock/mockData.json';

const contentWrapper = css`
  width: 100%;
  padding: 100px 16px 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: scroll;
  flex:1;
`;

export default function Content({ otherName, currentName }) {
  return (
    <div css={contentWrapper}>
      {mockData.map((item) => {
        return item.status === 0 ? (
          <LeftBubble key={item.id} content={item.content} name={otherName} time={item.time}/>
        ) : (
          <RightBubble key={item.id} content={item.content} name={currentName} time={item.time}/>
        );
      })}
    </div>
  );
}
