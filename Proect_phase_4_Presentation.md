# Phase 4 – Project Presentation



## 🎯 Project title

_TimaEstate – Full‑Stack Real Estate Application_

---

## 📝 Project overview

TimaEstate is a full‑stack web application that connects home buyers, renters, and property owners. It allows users to:

- **Search & filter** properties by location, price, bedrooms  
- **View** detailed property pages with images and descriptions  
- **Save/unsave** favorites for later review  
- **Chat** in real time with property owners via Socket.IO  
- **Toggle** between light and dark themes for comfort  

Frontend is built in React (Vite + SCSS); backend uses Node.js, Express, Prisma (MongoDB), JWT authentication, and Socket.IO for messaging.

---

## 📌 Use case summary

_Link to [Phase 1 Use Cases](#) for full details._

| Use Case                                | Implemented | Demonstration / Notes                                                           |
|-----------------------------------------|:-----------:|---------------------------------------------------------------------------------|
| User Registration & Authentication      | Yes         | Secure signup/login with bcrypt & JWT. Demo at 0:00 in the video.               |
| Property Search & Filtering             | Yes         | Search bar with location & price filters. Demo at 0:00.                         |
| Property Details Viewing                | Yes         | Click a listing to view `/posts/:id` page. Demo at 0:00.                        |
| Real‑time Chat                          | Yes         | One‑to‑one chat via Socket.IO. Demo at 0:00.                                     |
| User Notifications                      | Partially   | Unread‑message badges in navbar; future: push/email alerts.                     |
| Admin Functions                         | No          | Future work: admin panel for moderation.      |

---

## ✍️ Technical implementation

- **Frontend**  
  - React (Vite), SCSS modules, React Router, Axios  
  - Context API + Zustand for state (auth, chat, notifications)  
  - CSS variables for light/dark theming  

- **Backend**  
  - Node.js, Express REST API  
  - Prisma ORM with MongoDB connector  
  - JWT for auth, bcrypt for password hashing  

- **Real‑time**  
  - Socket.IO server & client for messaging  

- **Deployment & Tools**  
  - VS Code, Git/GitHub, Postman for API testing  

---

## 🚂 Development process

1. **Requirements & Planning** (Phase 1)  
   - Defined personas, use cases, user flows  

2. **Core Structure & Features** (Phase 2)  
   - Database schema, REST endpoints, React setup  

3. **Enhancements & UX** (Phase 3)  
   - Dark mode,   notifications, Real time chat   

4. **Presentation & Reflection** (Phase 4)  
   - Slide deck, speaker notes, live/demo prep  

---

## ☀️ Reflection and future work

**What worked well**  
- Seamless API‑UI integration with Prisma & React  
- Smooth real‑time chat experience  
- Theming via CSS variables simplified dark mode  

**Challenges**  
- Socket.IO integration with React (initially tricky)
- Managing state across multiple components
- Debugging real‑time chat issues (e.g., message delivery)



**Future ideas**  
- Advanced filters (saved searches, sort options)  
- Full notification system (email/push)  
- Admin dashboard for moderation & analytics  
- Mobile‑first responsive redesign  
- Map integration (Google Maps)  

---

## 📊 Work Hours Log

  | Date       | Used Hours | Subject(s)                                     | Outcome                                  |
  | :---  |     :---:      |     :---:      |---------------------|
  | 06.04.2025 | 1        | Planning Phase 1                              | Researched project topics and finalized the idea      |
  | 7.04.2025 | 2.5          | Planning Phase 1                              | Defined user personas, created and documented use cases, outlined database schema and API structure, drafted technical specifications, and planned user testing                 |
  | 07.04.2025 | 3          | Planning Phase 1                              | Created Low fidelity wireframes and published the Planning Phase 1 version on GitHub      |
   | 15.04.2025 | 30          | Core implementation (Phases 2–3)                             |  core setup and features of the Real Estate Platform, built with MongoDB, Prisma, Node.js/Express, React, SCSS, and Socket.IO.    |
   | 28.04.2025 | 25         | Enhancements & testing                            |  enhance the user interface by adding a dark mode toggle.      |
   | 12.05.2025 | 15         | Presentation preparation                             | Slides created & demo setupPresentation    |                               |

approx = 77 hrs


---

## 🪢 Presentation link

_Presented live during the lecture on May 15, 2025._  
Or view the recorded demo: https://.................
