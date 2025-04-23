// components/chat/ChatPopupManager.jsx
import { useState, useEffect } from "react";
import ChatBox from "./ChatBox";

const ChatPopupManager = () => {
  const [openChats, setOpenChats] = useState([]);

  const openChat = ({ chatId, receiver }) => {
    setOpenChats((prev) => {
      const exists = prev.find((c) => c.chatId === chatId);
      return exists ? prev : [...prev, { chatId, receiver }];
    });
  };

  const closeChat = (chatId) => {
    setOpenChats((prev) => prev.filter((c) => c.chatId !== chatId));
  };

  useEffect(() => {
    window.openChat = openChat;
    return () => delete window.openChat;
  }, []);

  return (
    <div className="chatPopupManager">
      {openChats.map(({ chatId, receiver }) => (
        <ChatBox
          key={chatId}
          chatId={chatId}
          receiver={receiver}
          onClose={() => closeChat(chatId)}
        />
      ))}
    </div>
  );
};

export default ChatPopupManager;
