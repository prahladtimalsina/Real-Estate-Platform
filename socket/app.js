import { Server } from "socket.io";

const io = new Server({ // Create a new socket.io server
  cors: {
    origin: "http://localhost:5173", // Replace with your for its default one frontend URL
  },
});

let onlineUser = []; // Array to store online users 

const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId }); // Add user to onlineUser array
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId); // Remove user from onlineUser array
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId); // Find user by userId
};

io.on("connection", (socket) => {
  socket.on("newUser", (userId) => { // Listen for new user connection
    addUser(userId, socket.id); // Add user to onlineUser array
  });

  socket.on("sendMessage", ({ receiverId, data }) => { // Send message to receiver
    const receiver = getUser(receiverId); // Find receiver in onlineUser array
    io.to(receiver.socketId).emit("getMessage", data); //
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen("4000");
