import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import "./chatBox.scss";

const ChatBox = ({ chat, onClose }) => {
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const messageEndRef = useRef();

  useEffect(() => {
    if (chat) {
      setMessages(chat.messages);
    }
  }, [chat]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!socket || !chat) return;

    const handleIncoming = (data) => {
      if (data.chatId === chat.id) {
        setMessages((prev) => [...prev, data]);
      }
    };

    socket.on("getMessage", handleIncoming);
    return () => socket.off("getMessage", handleIncoming);
  }, [socket, chat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMsg.trim()) return;

    try {
      const res = await apiRequest.post(`/messages/${chat.id}`, {
        text: newMsg,
      });
      setMessages((prev) => [...prev, res.data]);
      setNewMsg("");

      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (!chat) return null;

  return (
    <div className="chatBox">
      <div className="top">
        <div className="user">
          <img src={chat.receiver.avatar || "/noavatar.jpg"} alt="" />
          {chat.receiver.username}
        </div>
        <span className="close" onClick={onClose}>X</span>
      </div>
      <div className="center">
        {messages.map((m) => (
          <div
            key={m.id}
            className="chatMessage"
            style={{
              alignSelf: m.userId === currentUser.id ? "flex-end" : "flex-start",
            }}
          >
            <p>{m.text}</p>
            <span>{format(m.createdAt)}</span>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
      <form className="bottom" onSubmit={handleSubmit}>
        <textarea
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
