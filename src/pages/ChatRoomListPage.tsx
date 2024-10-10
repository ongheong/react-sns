//ChatRoomListPage.tsx
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import * as s from './Page.styles';
import ChatRoomListHeader from '../components/chatRoomList/header/ChatRoomListHeader'
import ChatRoomListContent from '../components/chatRoomList/content/ChatRoomListContent'
import ChatRoomListFooter from '../components/chatRoomList/footer/ChatRoomListFooter'

export default function ChatRoomListPage() {
  return (
    <div css={s.pageWrapper}>
      <ChatRoomListHeader />
      <ChatRoomListContent />
      <ChatRoomListFooter />
    </div>
  );
}
