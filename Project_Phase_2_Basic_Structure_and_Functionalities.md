# Project Phase 2 – Basic Structure and Main Functionalities

This document describes the core setup and features of the Real Estate Platform, built with MongoDB, Prisma, Node.js/Express, React, SCSS, and Socket.IO.

---

## 1. Environment

- **Tech Stack**
  - Frontend: React (Vite)
  - Styling: SCSS (Sass)
  - Backend: Node.js + Express
  - ORM: Prisma (MongoDB connector)
  - Database: MongoDB
  - Realtime Messaging: Socket.IO
  - Auth: JSON Web Tokens (JWT)

- **Dev Tools**
  - VS Code, Git, GitHub
  - Postman (API testing)
  - npm / yarn
  - .env for configuration (DATABASE_URL, JWT_SECRET, CLIENT_URL.)

---

## 2. Backend

- **Framework & ORM**
  - Express.js server
  - Prisma Client for all DB access (models: User, Post, PostDetail, SavedPost, Chat, Message)

- **API Endpoints**

### Authentication
- `POST /api/auth/register` - Register new user  
- `POST /api/auth/login` - User login  
- `POST /api/auth/logout` - User logout  

### Users
- `GET /api/users` - List all users  
- `PUT /api/users/:id` - Update user profile  
- `DELETE /api/users/:id` - Delete user account  
- `GET /api/users/notification` - Get notification count  
- `GET /api/users/profilePosts` - Get user's profile posts  

### Posts
- `GET /api/posts` - List all posts  
- `GET /api/posts/:id` - Get post details  
- `POST /api/posts` - Create new post  
- `PUT /api/posts/:id` - Update post  
- `DELETE /api/posts/:id` - Delete post  
- `POST /api/user/save` - Save post to favorites  

### Chat
- `GET /api/chat` - Get all conversations  
- `GET /api/chat/:id` - Get specific conversation  
- `POST /api/chat` - Start new conversation  
- `PUT /api/chat/read/:id` - Mark as read  

### Messages
- `POST /api/message/:chatId` - Send new message  

<!-- ### Test Routes   
- `GET /api/test/should-be-logged-in` - Test authentication  
- `GET /api/test/should-be-admin` - Test admin access   -->

---

## 3. Frontend

- **Framework & Styling**
  - React components (function + context-Api)
  - SCSS modules or global SCSS (with variables & mixins)

- **Routing & State**
  - React Router for navigation
  - Context  for auth & chat state

- **API & Sockets**
  - `axios` (or `fetch`) for REST calls
  - Socket.IO client for chat integration
  

- **File Structure:**
  - **Components Directory:**
    - `card/`
    - `chat/`
    - `filter/`
    - `list/`
    - `map/`
    - `navbar/`
    - `pin/`
    - `searchBar/`
    - `slider/`
    - `uploadWidget/`
  - **Context Providers:**
    - `AuthContextProvider`
    - `SocketContextProvider`
  - **Pages:**
    - `homePage.jsx`
    - `listPage.jsx`
    - `singlePage.jsx`
    - `login.jsx`
    - `register.jsx`
    - `newPostPage.jsx`
    - `profilePage.jsx`
    - `profileUpdatePage.jsx`
    - `register.jsx`
    - `singlePage.jsx`

---

## 4. Database

- **MongoDB** via Prisma’s MongoDB connector
- **Models** (from `schema.prisma`):
  - `User`
  - `Post` & `PostDetail`
  - `SavedPost`
  - `Chat` & `Message`
- **Indexes & Performance**
  - Ensure indexes on frequently filtered fields (e.g., `Post.city`, `Post.price`)
  - Leverage Prisma’s query batching for related records

---

## 5. Basic Structure and Architecture

```
/backend
  /controllers
  /lib 
  /middleware
  /prisma
  /routes

/frontend
  /src
    /components
    /context
    /lib    
    /routes
/socket
    /app.js  
```

- **Backend:** MVC pattern with controllers & services
- **Frontend:** Component‑based, SCSS‑driven styling
- **Socket.IO:** Holds everything socket‑related and bootstraps the HTTP server

---

## 6. Functionalities

- **Authentication:** register/login/logout
- **Property CRUD:** create, read, update, delete
- **Search & Filter:** by city, price, bedrooms, type
- **Save/Unsave Listings**
- **Real‑Time Chat:** one‑to‑one messaging with Socket.IO
- **Responsive UI:** desktop + mobile

---

## 7. Code Quality and Documentation

- **Linters & Formatters:** ESLint + Prettier
- **Docs:**
  - Inline comments for complex logic
  - API reference in README

---

## 8. Testing and Error Handling

- **Backend:**
  - Integration tests for API endpoints postman
  - Error-handling middleware in Express
- **Frontend:**
  - Frontend tested manually;
- **Error Handling:**
  - Uniform error responses (status, message)



---

## 9. User Interface and Interaction

- **SCSS Features:**
  - Variables for colors & spacing
  - Mixins for responsive breakpoints
  - Mobile-responsive design
  = Clean and modern UI

