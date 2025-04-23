import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


function ListPage() {
  const data = useLoaderData();
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  // const handleChatClick = async (receiverId) => {
  //   if (receiverId === currentUser.id) {
  //     alert("You can't chat with yourself!");
  //     return;
  //   }

  //   try {
  //     const res = await axios.post(
  //       "/api/chats",
  //       { receiverId },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${currentUser.token}`, // 🛡️ Token for verifyToken
  //         },
  //       }
  //     );
      
  //     console.log("Chat created:", res.data);
  //     setChatUserId(receiverId); // ✅ Trigger popup or redirect to chat UI
  //   } catch (err) {
  //     console.error("Failed to start chat:", err);
  //     alert("Something went wrong starting the chat.");
  //   }
  // };
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>} 
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} currentUser={currentUser} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
