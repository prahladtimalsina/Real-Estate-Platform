import { Link, useNavigate } from "react-router-dom";
import "./card.scss";
import apiRequest from "../../lib/apiRequest";

function Card({ item , currentUser}) {
  // console.log(currentUser);
  const navigate = useNavigate();

  const handleChatClick = async () => {
    if (currentUser._id === item.userId) return; // prevent chatting with self

    try {
      const res = await apiRequest.post("/chats", {
        receiverId: item.userId,
      });

      console.log("Chat created:", res.data);
      navigate("/profile"); // 👈 Redirect to ProfilePage to see new chat

    } catch (err) {
      console.error("Failed to create chat", err);
    }
  };
  return (
    <div className="card">
   
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon"  onClick={handleChatClick}>
              <img src="/chat.png" alt="Chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
